# TJBot: A Caring, Emotionally Intelligent Robot

This is a project to build/program a simple, caring emotionally intelligent robot using IBM’s TJBot and Watson Services. New functionalities will be added to the TJBot to best fit the project goals. The target audience is intended to be all people who want a companion, entertainment, or a support system during difficult times.

## **Weekly Goals**:

* ## **Week 1/21/19**
  * Get the robot fully functional (get the arm waving)
  * Figure out what is needed for IBM Cloud/Watson Services
    * What services do I need?
    * What do the services do?
    * Why do I think I need the services?
    * How much will services cost?
    * What are the restrictions
    * Create the Watson services
  
  * ### **Meeting Agenda**:
    * #### What was accomplished? 
      * Got Rpi headless, configured wifi and remote desktop access
      * Researched the services I need
      * Ran arm wave IBM jbot recipe demo with success.  Ran other tjbot recipe tests for speaker check, camera check, LED check, servo check.

      * TODO: 
        * Week 1/28 goals, create git clone of project on the Raspberry Pi

    * #### What problems were encountered? 
      * None major, slight issues with configuring wifi

    * #### What are the challenges for the coming week?  
      * Updating the config file to use API key and URL vs username and pw,  learning NODE.js 

  * ### **Meeting Minutes**:
    * **Comments from Matthew**:
      * Git workflow suggestions
      * Suggestions on implementing the tone test. Simple action/respone test where LED can shine based on tone, as an example. 
    * **Comments from Team**:
      *  N/A

* ## **Week 1/28/19**
  * Work on Step 2 from the proposal (focus on tone detection)
    * User initiates negative tone 
    * Program robot to respond 
    * Plan out how to go beyond existing demos (ideas are in the proposal)
    * Execute tests

  * ### **Meeting Agenda**:
    * #### What was accomplished? 
      * Configured cloud connectivity 
      * Configured git clone on Raspberry Pi 
      * Updated configuration files ready for testing speech to text, tone analysis, text to speech, and Watson Assistant conversation. 
      * Tested another recipe that tests user asking TJBot to shine a disco light with success 
      * Tested Conversation but need to reconfigure speaker
      * Modified a script from a sentiment analysis recipe that allows TJBot to shine his light based on various moods (analyzed via speech to text). 
      The moods tested were sadness, joy, anger, and fear. 
        * See the videos below to see this tests in action! 
          
        [![IMAGE ALT TEXT](http://img.youtube.com/vi/CHtvny04RFA/0.jpg)](http://www.youtube.com/watch?v=CHtvny04RFA "TJBot LED Responds to Sadness")
         
        [![IMAGE ALT TEXT](http://img.youtube.com/vi/2qLOB8AL_NU/0.jpg)](http://www.youtube.com/watch?v=2qLOB8AL_NU "TJBot LED Responds to Joy")
        
        [![IMAGE ALT TEXT](http://img.youtube.com/vi/em58ocSdvI8/0.jpg)](http://www.youtube.com/watch?v=em58ocSdvI8 "TJBot LED Responds to Anger")
        
        [![IMAGE ALT TEXT](http://img.youtube.com/vi/eUPryh5006c/0.jpg)](http://www.youtube.com/watch?v=eUPryh5006c "TJBot LED Responds to Fear")
      * Researched github licensing to prepare for git push 
        
 
      * TODO: 
        * Week 2/4 goals
        * Refine test 2 for tone (think of ways for TJ to converse and respond)
        * Push to git ensuring the proper citations and license information is included
    

    * #### What problems were encountered? 
      * General research, finding examples 
      * Debugging 
        * Figuring out how to modify Javascript code. 
        * Speaker connected to 3.5 mm jack doesnt work well. It was suggested online to use bluetooth or usb to 3.5mm adaptor. 

    * #### What are the challenges for the coming week?  
      * Learning  more NODE.js /Javascript for adding more code functionality
      * Updating speaker configuration

  * ### **Meeting Minutes**:
    * **Comments from Matthew**:
      * Importance of continually pushing to Git.
    * **Comments from Team**:
      *  Does the tone analyze speech directly? As it only analyzes tone in the text, I thought this question gave me good insight on improvments for the future. 

* ## **Week 2/4/19**
  * Continue Step 2
  * Test, debug, refine

  * ### **Meeting Agenda**:
    * #### What was accomplished? 
      * Configured speaker via usb adaptor and successfully tested conversation with TJ
      * TODO: Step 2 from proposal (Negative tone test). Program in some of my personal favorite things (such as favorite songs, jokes, quotes,movie quotes), and incorporate that the Watson services (Speech to Text, Tone Analyzer, Text to Speech, Watson Assistant). 

* ## **Week 2/11/19**
  * Finish up Step 2 (**see above TODO for week 2/4/19, may need to adjust the dates**)
    * #### Accomplishments-2/18/19
      * Read through Watson Assistant Tutorial: [Creating Dialogue with Watson](https://console.bluemix.net/docs/services/conversation/dialog-overview.html#dialog-overview). Key components to create dialogue is outlined below:
        *  **Create skill**: a container for all of the artifacts that define a conversation flow.
        *  **Create intent**: define's user's goal or purpose, TJ detects this intent identified by a hashtag based on user-defined phrases (User examples in Watson Assistant)
        *  **Add entities**: Watson’s way of handling significant parts of input used to alter way it responds to intent
        *  **Create dialogue**: uses intents and entities plus context from app to interact with user and provide a response
            -  Add nodes in Watson Assistant
                +  Nodes contain triggers and responses
                    *  Triggers are conditions and if the user input matches a certain condition, the response from TJ is executed 
                    *  Trigger can be a context variable.  This is used if the context variable expression that you specify is true. Use the syntax, $variable_name:value or $variable_name == 'value'. This data exists in the .js code and passed to Assistant service. 
        * Can test dialogue in Watson Assistant's Try it Out panel
      
      * ### Outline of dialogue I plan to code this week:
        * **Intent**: #receive-support
          * **User examples**: "I feel so horrible, I am so sad, I had an awful day" 
          * #### **Example dialogue 1**: (simplest conversation to test first)
            *  **Parent Node 1**: 
              * If $emotion == 'sadness': // trigger is context variable from tj.analyzeTone(text) method in tjbot libary
                * Then: TJ can give any of these responses at random:
                  * "Oh no. It’ll all be better. Trust me. Read your favorite book, watch something silly, and tomorrow is another day!"
                  * "I am so sorry, let me tell you one of your favorite jokes. <add text here>
                  * "I am so sorry, <add favorite movie quote text here>"
          
          * #### **Example dialogue 2**: (more complex, but more ideal)
         
            * **Parent Node 1**: 
              * If $emotion == 'sadness': // trigger is context variable
                * Then: TJ asks, "why are you sad?" // response
                  * **Child Node 1**: 
                    * If @situation:break-up: // if reason is break-up 
                      *  Then: Tj responds: "I am so sorry, things will be better, I promise you!"

      * Read through key node.js functions I'll be using 
      
      * **TODO**-2/18/19:
        * Test out dialogue outlined above
        * Integrate dialogue to added code incorporated all Watson services
        * Test code with Watson Assistant 
                        
  * Begin Step 3 from proposal 
    * User initiates positive tone
    * Program robot to respond

* ## **Week 2/18/19**
  * Contine Step 3
  * Test, debug, refine

* ## **Week 2/25/19**
  * Begin Step 4 from proposal
  * Robot detects quiet environment
  * Program robot to initiate dialogue
  * This is one of the big sretch goals, so if there are issues, or it is too timily to implement, go back and optimize existing functionalities (for instance, explore the facial recognition and Twitter API capabilities)

* ## **Week 3/4/19**
  * Continue Step 4
  * Test, debug, refine
  * If not implementing Step 4, continue optimizing other functionalities

* ## **Week 3/11/19**
  * Execute working tests
  * Begin final report and video
  * Work on finalizing Github repo

* ## *Week 3/18/19**
  * Clean up any of the remaining final tasks (report/video/repo)
  * Prepare for demo

## License/Notes
 * This project is licensed under the Apache License, Version 2.0. Full license text is available here: [LICENSE](./LICENSE.txt). This project includes code modifications from IBM's TJBot recipe code [sentiment_analysis](https://github.com/ibmtjbot/tjbot/blob/master/recipes/sentiment_analysis/sentiment.js). The [NOTICE](./NOTICE.txt) file includes more information about the original work, and the original copyright notice and proper citations are included in the [source code](./tj_human_interact.js). 

