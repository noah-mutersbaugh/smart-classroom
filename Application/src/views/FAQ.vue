<template>
  <div class="d-flex flex-column">
    <NavBar msg="FAQ" />

    <div class="container-md mt-3">
      <h1>Students and Non-Faculty</h1>
      <div class="row">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">How many Smart Classrooms are at GVSU?</h5>
            <p class="card-text">
              There are currently 3 Smart Classrooms at GVSU's campuses.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Where are the Smart Classrooms located?</h5>
            <p class="card-text">
              The Smart Classrooms are located at MAK-1-1-1, xxxx, and xxxx.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">What technology is in each room?</h5>
            <p class="card-text">
              Click here to see more information on the technology!
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Do Non-Faculty have access to control technology in the room?</h5>
            <p class="card-text">
              Non-Facult don't have access to pre-set preferences, but they do have access to the technology for presentations and recorded lectures.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Quote</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>I'm so glad to have these classrooms on campus. They make me feel like GVSU is investing in their students.</p>
              <footer class="blockquote-footer">
                David Powers in <cite title="Source Title">The Lanthorn</cite>
              </footer>
            </blockquote>
          </div>
        </div>

        <h1 class="mt-3">Professors</h1>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">How can I change my settings?</h5>
            <p class="card-text">
              All of your technology settings can be found here!
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">My settings aren't taking effect. What can I do?</h5>
            <p class="card-text">
              Go ahead and fill out the Feedback form and we'll be sure to respond as soon as possible with a solution.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">I'd like to offer a suggestion! Who can I get in contact with?</h5>
            <p class="card-text">
              Our Feedback form is the perfect place to offer suggestions! Your feedback will be sent directly to an active email address of the faculty responsible, and you'll receive a confirmation email soon after.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Quote</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>These smart classrooms are intended to reduce cognitive load on our professors so they can spend more time on their lesson plan, and less time on fiddling with technology. I think we've managed to achieve this goal through the Smart Classroom Initiative.</p>
              <footer class="blockquote-footer">
                Noah Mutersbaugh
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>