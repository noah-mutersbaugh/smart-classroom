<template>
  <div class="d-flex flex-column">
    <NavBar msg="GVSU Smart Classrooms" />
<<<<<<< HEAD
    <!-- <ToastTester/> -->
=======
>>>>>>> webdev_noah
    <div class="container p-4 mt-4 bg-gradient bg-light">
      <div class="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        <div class="col">
          <Card
            title="Inventory"
            body="The Inventory page will show you all the current inventory, where they're located, as well as classroom information. "
            link="inventory"
            link_desc="To Inventory"
          />
        </div>

        <div class="col">
          <Card
            title="Technology Specifications"
            body="The Technology Specification page will show you some information about each piece of technology located in GVSU's Smart Classrooms."
            link="tech-specs"
            link_desc="To Tech Specs"
          />
        </div>

        <div class="col">
          <Card
            title="Technology Settings"
            body="Hello Faculty Member! Here is where you can change your settings for the technology in your classroom."
            link="tech-settings"
            link_desc="To Tech Settings"
          />
        </div>

        <div class="col">
          <Card
            title="Location of Smart Classrooms"
            body="The Map page will show you the location of each Smart Classroom at GVSU."
            link="map"
            link_desc="To Map"
          />
        </div>

        <div class="col">
          <Card title="FAQ" body="This is where you should go to see the answers to Frequently Asked Questions." link="faq" link_desc="To FAQ" />
        </div>

        <div class="col">
          <Card
            title="Feedback"
            body="See a problem with the page? Would you like to have access to a new technology in the classroom? Let us know!"
            link="feedback"
            link_desc="To Feedback"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Card
  },
};
</script>
