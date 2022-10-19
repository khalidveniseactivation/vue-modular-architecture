<template>
  <div class="home">
    <h1>
      Home Page
    </h1>
    <div v-for="(q, index) in answersModel" :key="index">
      <p>{{ q.question }}</p>
      <v-radio-group
        v-model="q.answerModel"
        row
        required
        @change="getIndex(index)"
      >
        <v-radio
          label="Yes"
          :value="true"
          :color="
            getValidateAnswersModel[index] != null &&
            !getValidateAnswersModel[index]
              ? 'red'
              : ''
          "
        />
        <v-radio
          label="No"
          :value="false"
          :color="
            getValidateAnswersModel[index] != null &&
            !getValidateAnswersModel[index]
              ? 'red'
              : ''
          "
        />
        <div
          v-if="
            getValidateAnswersModel[index] != null &&
              !getValidateAnswersModel[index]
          "
        >
          Wrong Answer
        </div>
      </v-radio-group>
    </div>
    <v-btn depressed :disabled="!isAllValide">
      Disabled
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex"
export default {
  name: "Home",

  mounted() {
    this.initializeAnswersModel()
  },
  methods: {
    ...mapMutations("survey", {
      setAnswersModel: "SET_ANSWERS_MODEL",
      setIsAllValide: "SET_IS_ALL_VALIDE",
      setCurrentIndex: "SET_CURRENT_INDEX"
    }),
    getIndex(index) {
      const q = this.answersModel[index]
      if (q.answerModel !== null && q.answer === q.answerModel) {
        if (index < this.questions.length - 1)
          this.answersModel = {
            ...this.questions[++index],
            answerModel: null
          }
      }
    },
    initializeAnswersModel() {
      this.answersModel = {
        ...this.questions[0],
        answerModel: null
      }
    }
  },
  computed: {
    ...mapGetters("survey", {
      getValidateAnswersModel: "getValidateAnswersModel"
    }),
    ...mapState("survey", {
      questions: state => state.questions
    }),
    isAllValide: {
      get() {
        return this.$store.state.survey.isAllValide
      },
      set(value) {
        this.setIsAllValide(value)
      }
    },
    answersModel: {
      get() {
        return this.$store.state.survey.answersModel
      },
      set(value) {
        this.setAnswersModel(value)
      }
    }
  },
  watch: {
    answersModel: {
      deep: true,
      handler() {
        const currentIndex = this.getValidateAnswersModel.filter(
          el => el === true
        ).length

        if (currentIndex === this.questions.length) this.isAllValide = true
        else {
          this.isAllValide = false
        }
      }
    }
  }
}
</script>
