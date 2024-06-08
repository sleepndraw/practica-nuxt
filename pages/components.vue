<template>
  <body
    
  >
    <div class="components lg:mx-36 md:mx-14 sm:mx-8 px-4 mx-4 my-4 sm:my-4 md:my-8 lg:my-12 xl:my-16 2xl:my-20 xl:mx-44 2xl:mx-60">
      <sectionheader
        title="//components"
        subtitle="navigation, cards & inputs"
      />

      <section class="navigation">
        <article class="buttons_showcase">
          <div  class="title">
            <h2>buttons.</h2>
            <p>
              These are the buttons and how they should be used for their
              different states.
            </p>
          </div>
          <div data-aos="fade-up"  class="buttons_box">
            <div class="buttons_and_text">
              <div class="btns_white_bg">
                <div class="btns_black">
                  <customButton title="Hover me!" /><customButton
                    title="disabled :("
                    class="disabled"
                  />
                </div>
                <div class="btns_blue">
                  <customButton title="Hover me!" class="blue" /><customButton
                    title="disabled :("
                    class="disabled blue"
                  />
                </div>
              </div>
              <div class="buttons_text">
                <h3></h3>
                <p>
                  Buttons that should be used only over a white background for
                  better visibility.
                </p>
              </div>
            </div>
            <div class="buttons_and_text">
                <div class="btns_blue_bg">


                    <customButton title="Hover me!" class="white" /><customButton
                      title="disabled :("
                      class="disabled white"
                    />
      
                  </div>
                  <div class="buttons_text">
                      <h3></h3>
                      <p>
                        Buttons that should be used only over a blue or black colored background for
                        better visibility.
                      </p>
                    </div>
            </div>
          </div>
        </article>
        <article data-aos="fade-left" class="cards_showcase">
            <div class="title"><h2>cards.</h2>
                <p>These are the different card components and how to use them in context.</p></div>
            
            <section class="academic">
                <div class="title">
                    <h4>Academic</h4>
                    <p>These are cards pertaining either the academic section of the webpage or the recent publications component.</p>
                </div>
                <pubCard title="Computer graphics and applications" subtitle="López-Fernández, D., Mayor, J., Pérez, J., & Gordillo, A. (2023). Learning and Motivational Impact of Using a Virtual Reality Serious Video Game to Learn Scrum. IEEE Transactions on Games, 15(3), 430–439." date="2022"/>
            </section>
            <div data-aos="fade-left" class="container">
              <section  class="team">
                <div class="title">
                    <h4>Team</h4>
                    <p>These are cards for the team members.</p>
                </div>
               <div class="team_cards ">
                <teamCard name="Team member" subtitle="member info"/>
                <teamCard name="Team member" subtitle="member info"/>
                <teamCard name="Team member" subtitle="member info"/>
               </div>
            </section>
            </div>
        </article>
        <article data-aos="fade-up"   class="inputs_showcase">
            <div class="container"><div class="title"><h2>inputs & dropdowns</h2>
              <p>These are the styles for the dropdowns and input forms.</p></div>
              
              <!-- <smallInput class="search" placeholder="search here..." icon="material-symbols:search"></smallInput> -->
              <!-- <Icon name="mingcute:add-fill" color="black" /> -->
              
              <div class="inputs_container">
                <div class="container"><dropdown></dropdown></div>
                <myForm></myForm>
              </div></div>
        </article>
      </section>
    </div>
  </body>
</template>
<style lang="sass">
@import 'public/assets/main.sass'
</style>
<script>

</script>