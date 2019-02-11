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
      * Modified a script from a sentiment analysis recipe that allows TJBot to shine his light based on various moods (analyzed via speech to text). The moods tested were fear, anger, sadness, and joy. 
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

* ## **Week 2/11/19**
  * Finish up Step 2
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
 * This project is licensed under the Apache License, Version 2.0. Full license text is available here: [LICENSE](./LICENSE.txt). This project includes code modifications from IBM's TJBot recipe code [sentiment_analysis](https://github.com/ibmtjbot/tjbot/blob/master/recipes/sentiment_analysis/sentiment.js). The [NOTICE](./NOTICE.txt) file includes more information about the original work, and the original copyright notice and proper citations are included in the [source code](./tj_human_interaction.js). 

