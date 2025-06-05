<script setup>
import { computed, reactive} from 'vue'
import useVacancyCardData from '@/composables/useVacancyCardData'
import { useRoute, useRouter } from 'vue-router'
import useVuelidate from '@vuelidate/core'
import { email, helpers, required, sameAs, minLength } from '@vuelidate/validators'
import {vMaska} from 'maska/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// const emailField = ref('')
const formData = reactive({
  surnameField: null,
  nameField: null,
  phoneField: null,
  emailField: null,
  fileField: null,
  checkbox: null,
  pending: null,
})

const rules = computed(() => ({
  surnameField: {required: helpers.withMessage('Фамилия обязательна', required)},
  nameField: {required: helpers.withMessage('Имя обязательно', required)},
  phoneField: {required: helpers.withMessage('Номер телефона обязателен', required), minLength:  minLength(19)},
  emailField: {
    email: helpers.withMessage('Введите электронную почту в правильном формате', email),
    required: helpers.withMessage('Электронная почта обязательна', required)
  },
  fileField: {required: helpers.withMessage('Прикрепите файл резюме', required)},
  checkbox: {required: helpers.withMessage('Требуется согласие', required), sameAs: sameAs(true)},
}))

const v = useVuelidate(rules, formData)

const { vacancies } = useVacancyCardData()

const route = useRoute()

const vacancyId = Number(route.params.id)

const vacancy = computed(() => vacancies.value.find((v) => v.id === vacancyId))

if (!vacancy.value) {
  console.warn(`Вакансия с id=${vacancyId} не найдена`)
  useRouter().replace('/404')
}

const splitText = (text) => {
  return text
    ? text
        .split(/;|\.\s*/)
        .map((t) => t.trim())
        .filter((t) => t.length)
    : []
}

const responsibilitiesList = computed(() => splitText(vacancy.value?.responsibilities))
const requirementsList = computed(() => splitText(vacancy.value?.requirements))
const conditionsList = computed(() => splitText(vacancy.value?.conditions))

const TASHKENT_NAMES = ['г. Ташкент', 'Toshkent sh.']
const showLocation = computed(() =>
    // vacancy.value?.region !== 'Toshkent sh.' && vacancy.value?.region !== 'г. Ташкент'
    !TASHKENT_NAMES.includes(vacancy.value?.region),
)

const showFieldError = (field) =>{
  return computed(() => v.value[field].$dirty && v.value[field].$invalid)
}
const submitForm = async()=> {
  v.value.$touch()
  console.log(formData.phoneField.length)

  const result = await v.value.$validate()
  if(formData.pending) return

  if(result) {
    formData.pending = true
    alert('Your CV is successefully sent to our HR department!')
  } else {
    alert('Error! Submission failed!')
  }
  try {
    const payload = {
      surname: formData.surnameField,
      name: formData.nameField,
      phone: formData.phoneField,
      email: formData.emailField,
      file: formData.fileField,
      checkbox: formData.checkbox,
    }
    setTimeout(()=>{
      console.log(payload)
      console.log('The request has been sent');
      resetForm()
  })
  } catch(e) {
    console.log(e)
  }

}

const resetForm = () => {
  Object.keys(formData).forEach((key)=>{
    formData[key] = null;
  })
  v.value.$reset()
}
</script>

<template>
  <section class="w-full py-20 bg-gray-50" id="vacancies-list">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mt-10 grid grid-cols-1 lg:grid-cols-6 gap-12">
        <div class="lg:col-span-2">
          <form @submit.prevent="submitForm" class="w-full flex flex-col px-5 py-5 space-y-4 bg-white shadow-lg rounded-xl">
            <h3 class="text-lg lg:text-xl font-medium mb-5">
              {{ $t('vacancy_response_form.heading') }}
            </h3>
            <div class="py-5 flex flex-col gap-4 text-sm">
              <div class="flex flex-col gap-2">
                <label for="surname">{{
                  $t('vacancy_response_form.input_placeholders.surname')
                }}</label>
                <input
                  type="text"
                  :placeholder="$t('vacancy_response_form.input_placeholders.surname')"
                  v-model="v.surnameField.$model"
                  :error="v.surnameField.$errors"
                  @focus="v.$reset()"
                  id="surname"
                  class="w-full rounded-md outline-solid outline-1 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
                />
              </div>
              <div v-if="showFieldError" class="text-red-500 text-sm mt-1">
                <p v-for="e in v.surnameField.$errors" :key="e.$uid">{{ e.$message }}</p>
              </div>

              <div class="flex flex-col gap-2">
                <label for="name">{{ $t('vacancy_response_form.input_placeholders.name') }}</label>
                <input
                  type="text"
                  :placeholder="$t('vacancy_response_form.input_placeholders.name')"
                  v-model="v.nameField.$model"
                  :error="v.nameField.$errors"
                  @blur="v.nameField.$touch"
                  @focus="v.$reset()"
                  id="name"
                  class="w-full rounded-md outline-solid outline-1 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
                />
              </div>
              <div v-if="showFieldError" class="text-red-500 text-sm mt-1">
                <p v-for="e in v.nameField.$errors" :key="e.$uid">{{ e.$message }}</p>
              </div>

              <div class="flex flex-col gap-2">
                <label for="email">{{
                  $t('vacancy_response_form.input_placeholders.email')
                }}</label>
                <input
                  type="email"
                  :placeholder="$t('vacancy_response_form.input_placeholders.email')"
                  v-model="v.emailField.$model"
                  :error="v.emailField.$errors"
                  @blur="v.emailField.$touch"
                  @focus="v.$reset()"
                  id="email"
                  class="w-full rounded-md outline-solid outline-1 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
                />
              </div>
              <div v-if="showFieldError" class="text-red-500 text-sm mt-1">
                <p v-for="e in v.emailField.$errors" :key="e.$uid">{{ e.$message }}</p>
              </div>

              <div class="flex flex-col gap-2">
                <label for="phone">{{
                  $t('vacancy_response_form.input_placeholders.phone')
                }}</label>
                <input
                  type="phone"
                  :placeholder="$t('vacancy_response_form.input_placeholders.phone')"
                  v-model="v.phoneField.$model"
                  :error="v.phoneField.$errors"
                  @focus="v.$reset()"
                  id="phone"
                  v-maska
                  :data-maska="'+998 (##) ###-##-##'"
                  class="w-full rounded-md outline-solid outline-1 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out"
                />
              </div>
              <div v-if="showFieldError" class="text-red-500 text-sm mt-1">
                <p v-for="e in v.phoneField.$errors" :key="e.$uid">{{ e.$message }}</p>
              </div>

              <div class="flex flex-col gap-2">
                <label for="CV"
                  >{{ $t('vacancy_response_form.resume_label') }}&nbsp;<span
                    >(pdf, docx)</span
                  ></label
                >
                <label
                  class="relative flex items-center justify-center w-full rounded-md outline-dashed outline-1 px-2.5 py-2 bg-default text-base text-gray-500 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:border-sky-500 focus:shadow-md transition duration-200 ease-in-out cursor-pointer hover:bg-green-50 transition"
                >
                  {{ $t('vacancy_response_form.file_input') }}
                  <input
                    type="file"
                    accept=".pdf, .docx"
                    @change="formData.fileField = $event.target.files[0]"
                    :error="v.fileField.$errors"
                    @focus="v.$reset()"
                    name="CV"
                    id="CV"
                    class="invisible absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </label>
              </div>
              <div v-if="showFieldError" class="text-red-500 text-sm mt-1">
                <p v-for="e in v.fileField.$errors" :key="e.$uid">{{ e.$message }}</p>
              </div>

              <div class="flex gap-2">
                <input
                  type="checkbox"
                  @focus="v.$reset()"
                  v-model="v.checkbox.$model"
                  :error="v.checkbox.$errors"
                  id="accept"
                  required
                />
                <label for="accept">{{ $t('vacancy_response_form.agree_text') }}</label>
              </div>
            </div>
            <button
              type="submit"
              class="py-2 px-4 text-sm text-white bg-primary rounded-lg hover:cursor-pointer hover:bg-primary/50 disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 disabled:bg-primary aria-disabled:bg-primary"
              id="filter"
              :disabled="v.$invalid || formData.pending"
            >
              {{ $t('vacancy_response_form.response_btn') }}
            </button>
          </form>
        </div>
        <div class="lg:col-span-4 w-full space-y-4" v-if="vacancy">
          <h1 class="text-2xl lg:text-3xl font-medium mb-3">{{ vacancy.heading }}</h1>
          <div
            class="w-full flex justify-center items-center text-center mb-6"
            data-orientation="horizontal"
            role="separator"
          >
            <div class="w-full border-gray-400 border-solid border-b"></div>
          </div>
          <div class="text-gray-400">
            {{ vacancy.date }}&nbsp;<span v-if="showLocation"
              >&middot;&nbsp;{{ vacancy.location }}&nbsp;</span
            >&middot;&nbsp;{{ vacancy.region }}
          </div>
          <div class="mb-10">
            <h2 class="text-xl lg:text-2xl font-medium mb-5">
              {{ $t('vacancies_details.responsibilities') }}
            </h2>
            <ul class="list-disc pl-4 space-y-2 break-words">
              <li v-for="(p, i) in responsibilitiesList" :key="i">{{ p }}</li>
            </ul>
          </div>
          <div class="mb-10">
            <h2 class="text-xl lg:text-2xl font-medium mb-5">
              {{ $t('vacancies_details.requirements') }}
            </h2>
            <ul class="list-disc pl-4 space-y-2 break-words">
              <li v-for="(p, i) in requirementsList" :key="i">{{ p }}</li>
            </ul>
          </div>
          <div class="mb-10">
            <h2 class="text-xl lg:text-2xl font-medium mb-5">
              {{ $t('vacancies_details.conditions') }}
            </h2>
            <ul class="list-disc pl-4 space-y-2 break-words">
              <li v-for="(p, i) in conditionsList" :key="i">{{ p }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
