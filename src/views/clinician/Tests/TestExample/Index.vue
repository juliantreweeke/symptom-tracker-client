<script>
import SideBarLayout from "../../../../components/SideBarLayout/Index.vue";
import FormContainer from "../../../../components/FormContainer/Index.vue";
import CustomRadioGroup from "./CustomRadioGroup.vue";
import styles from "./styles.css";

export default {
  name: "TestExample",
  styles,
  components: {
    FormContainer,
    CustomRadioGroup,
    SideBarLayout
  },
  data: function() {
    return {
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: ["week1"]
        }
      },
      series: [
        {
          name: "k-10",
          data: []
          // data: [0, 1, 0, 2, 0, 3, 4, 0]
        }
      ],
      totalScores: [],
      weeks: [],
      savedData: [],
      formData: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null,
        question6: null,
        question7: null,
        question8: null,
        question9: null,
        question10: null
      },
      answers: [
        {
          id: "answer1",
          text: "None of the time",
          value: 0
        },
        {
          id: "answer2",
          text: "A little of the time",
          value: 1
        },
        {
          id: "answer3",
          text: "Some of the time",
          value: 2
        },
        {
          id: "answer4",
          text: "Most of the time",
          value: 3
        },
        {
          id: "answer5",
          text: "All of the time",
          value: 4
        }
      ],
      questions: [
        {
          id: 1,
          text: "About how often did you feel tired out for no good reason?"
        },
        {
          id: 2,
          text: "About how often did you feel nervous?"
        },
        {
          id: 3,
          text:
            "About how often did you feel so nervous that nothing could calm you down?"
        },
        {
          id: 4,
          text: "About how often did you feel hopeless?"
        },
        {
          id: 5,
          text: "About how often did you feel restless or fidgety?"
        },
        {
          id: 6,
          text:
            "About how often did you feel so restless you could not sit still?"
        },
        {
          id: 7,
          text: "About how often did you feel depressed?"
        },
        {
          id: 8,
          text: "About how often did you feel that everything was an effort?"
        },
        {
          id: 9,
          text:
            "About how often did you feel so sad that nothing could cheer you up?"
        },
        {
          id: 10,
          text: "About how often did you feel worthless?"
        }
      ]
    };
  },
  methods: {
    async addTest() {
      this.savedData.push(this.formData);

      let score = 0;
      Object.keys(this.formData).forEach(key => {
        score = score + this.formData[key];
        console.log("SCORE", score);
        this.formData[key] = null;
      });

      this.options.xaxis.categories.push(`week ${this.savedData.length + 1}`);

      this.totalScores.push(score);

      this.series = [
        {
          data: this.totalScores
        }
      ];
    }
  }
};
</script>

<template>
  <SideBarLayout>
    <div class="test-example">
      <FormContainer
        class="form"
        heading="K 10"
        v-bind:submit="addTest"
        buttonText="Submit"
      >
        <CustomRadioGroup
          id="question1"
          v-model="formData.question1"
          v-bind:options="answers"
          label="About how often did you feel tired out for no good reason?"
        />
        <CustomRadioGroup
          id="question2"
          v-model="formData.question2"
          v-bind:options="answers"
          label="About how often did you feel nervous?"
        />
        <CustomRadioGroup
          id="question3"
          v-model="formData.question3"
          v-bind:options="answers"
          label="About how often did you feel so nervous that nothing could calm you down?"
        />
        <CustomRadioGroup
          id="question4"
          v-model="formData.question4"
          v-bind:options="answers"
          label="About how often did you feel hopeless?"
        />
        <CustomRadioGroup
          id="question5"
          v-model="formData.question5"
          v-bind:options="answers"
          label="About how often did you feel restless or fidgety?"
        />
        <CustomRadioGroup
          id="question6"
          v-model="formData.question6"
          v-bind:options="answers"
          label="About how often did you feel so restless you could not sit still?"
        />
        <CustomRadioGroup
          id="question7"
          v-model="formData.question7"
          v-bind:options="answers"
          label="About how often did you feel depressed?"
        />
        <CustomRadioGroup
          id="question8"
          v-model="formData.question8"
          v-bind:options="answers"
          label="About how often did you feel so sad that nothing could cheer you up?"
        />
        <CustomRadioGroup
          id="question9"
          v-model="formData.question9"
          v-bind:options="answers"
          label="About how often did you feel that everything was an effort?"
        />
        <CustomRadioGroup
          id="question10"
          v-model="formData.question10"
          v-bind:options="answers"
          label="About how often did you feel worthless?"
        />
      </FormContainer>

      <div class="chart">
        <apexchart
          width="500"
          v-bind:options="options"
          v-bind:series="series"
        ></apexchart>
      </div>
    </div>
  </SideBarLayout>
</template>
