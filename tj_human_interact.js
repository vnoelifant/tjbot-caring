/**
 * Copyright 2016-2018 IBM Corp. All Rights Reserved.
 * Modifications Copyright 2019 Veronica Medrano

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *            http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The following code is a derivative work of TJBot recipe code (
 * sentiment_analysis) developed by IBM, which is licensed under the Apache
 * License, Version 2. This code is also licensed under the terms of the
 * Apache, Verison 2.
*/

/**
 * 2/10/19 VM: Summary of main modification: Removed Twitter sentiment
 * analysis code and replaced with code to allow TJBot to detect tone from
 * user's speech using Watson API services and the TJBot library:
 * https://github.com/ibmtjbot/tjbotlib. Citations are included throughout
 * code as necessary
*/

/**
 * This is a program that implement various functions which allows TJBot to
 * interact with humans and respond to their tone in various ways using
 * Watson's API and TJBot software/libraries. Initially, a test is written to
 * have TJBot shine his LED light based on the mood of processed text using
 * Watson's Speech to Text service
*/

/**
 * The following  code to import modules, load config file, set up hardware,
 * set up TJBot and set the confidence bound was obtained from
 * https://github.com/ibmtjbot/tjbot/blob/master/recipes/sentiment_analysis/
 * sentiment.js on 2/5/19. A slight modification to add a microphone to
 * hardware configuration is implemented. Detailed citation shown below:
 */

/**************************************************
* Source Code Title: sentiment.js
* Software Title: TJBot
* Authors: Justin Weisz, Maryam Ashoori
* Date: N/A
* Code version: TJBot v1.5
* Availability: https://github.com/ibmtjbot/tjbot/blob/master/recipes/sentiment_analysis/sentiment.js
***************************************************/
// import modules

// VM: adding 2/25/19
const watson = require('watson-developer-cloud');

var TJBot = require('tjbot');
var config = require('./config');


// obtain credentials from config.js
var credentials = config.credentials;


// obtain user-specific config
var WORKSPACEID = config.workspaceId;

// these are the hardware capabilities that TJ needs
var hardware = ['microphone', 'speaker', 'led'];

// obtain TJBot's configuration from config.js
var tjConfig = config.tjConfig;

// instantiate TJBot
var tj = new TJBot(hardware, tjConfig, credentials);

// may need for later
// update attention word to name "David"
// const attentionWord = tj.tjConfig.robot.name

/******************************************************************************
* Create Watson Services (may only need Assistant constructor)
*******************************************************************************/
// Supplying the IAM API key
// in the constructor, letting the SDK manage the IAM token

/*
const speech_to_text = new watson.SpeechToTextV1({
  iam_apikey: credentials.speech_to_text.apikey,
  url: credentials.speech_to_text.url,
});

const tone_analyzer = new watson.ToneAnalyzertV3({
  iam_apikey: credentials.tone_analyzer.apikey,
  url: credentials.tone_analyzer.url,
  version: '2017-09-21',
});

*/

// Supplying the IAM API key for Watson Assistant service
// in the constructor, letting the SDK manage the IAM token
const conversation = new watson.AssistantV1({
  iam_apikey: credentials.assistant.apikey,
  version: '2018-20-09',
  url: credentials.assistant.url,
});

/*
const text_to_speech = new watson.TextToSpeechV1({
  iam_apikey: credentials.text_to_speech.apikey,
  url: credentials.text_to_speech.url,
});
*/

// Testing Robot name
console.log(tjConfig.robot.name, "wants to know your feelings");


// set confidence bound
var CONFIDENCE_THRESHOLD = 0.5;

    /**
     * The following  utility method "analyzeTone" and its code was obtained
     * from https://github.com/ibmtjbot/tjbot/blob/master/recipes/
     * sentiment_analysis/sentiment.js on 2/5/19. Minor function name change
     * from "shineForEmotion" to "shineLedEmo". Detailed citation shown below:
     */

    /**************************************************
    * Source Code Title: sentiment.js
    * Software Title: TJBot
    * Authors: Justin Weisz, Maryam Ashoori
    * Date: N/A
    * Code version: TJBot v1.5
    * Availability: https://github.com/ibmtjbot/tjbot/blob/master/recipes/sentiment_analysis/sentiment.js
    ***************************************************/


// function to open microphone and streams data to the speech_to_text service
// David listens to what your speech is and translates it to text
// tj.listen(function(text) {
    // print text to console
// console.log(text);

// function to open microphone and streams data to the speech_to_text service
// function speechToText(text) {
  // print text to console
  // console.log(text);
const getEmotion = (text) => {
  return new Promise((resolve) => {
    let emotion = '';
    // analyze text for different emotions
    tj.analyzeTone(text).then(function(tone) {
    // find the tone with the highest confidence
    // only consider the emotional tones (anger, fear, joy, sadness)
    // each tone looks like this:
    // {
    //   "score": 0.6165,
    //   "tone_id": "sadness",
    //   "tone_name": "Sadness"
    // }

      var emotionalTones = tone.document_tone.tones.filter(function(t) {
        return t.tone_id == 'anger' || t.tone_id == 'fear' || t.tone_id == 'joy' || t.tone_id == 'sadness';
      });

      //extract most prevalent tone
      if (emotionalTones.length > 0) {
        var maxTone = emotionalTones.reduce(function(a, b) {
              return (a.score > b.score) ? a : b;
        });

      // verify confidence
        if (maxTone.score >= CONFIDENCE_THRESHOLD) {
          emotion = maxTone.tone_id;
          console.log("Current emotion is " + emotion);

          //shineLedEmo(emotion);
          //converseDavid(text);
          //converseDavid();
        }
      }
    });
      resolve(emotion);
  });
}




    /**
     * The following  function and its code was obtained from
     * https://github.com/ibmtjbot/tjbot/blob/master/recipes/sentiment_analysis
     * /sentiment.js on 2/5/19. Minor function name change from
     * "shineForEmotion" to "shineLedEmo". Detailed citation shown below:
    */

    /**************************************************
    * Source Code Title: sentiment.js
    * Software Title: TJBot
    * Authors: Justin Weisz, Maryam Ashoori
    * Date: N/A
    * Code version: TJBot v1.5
    * Availability: https://github.com/ibmtjbot/tjbot/blob/master/recipes/sentiment_analysis/sentiment.js
    ***************************************************/

/*
// shine LED based on emotion
function shineLedEmo(emotion) {
  console.log("Current emotion is " + emotion);

  switch (emotion) {
  case 'anger':
    tj.shine('red');
    break;
  case 'fear':
    tj.shine('magenta');
    break;
  case 'joy':
    tj.shine('yellow');
    break;
  case 'sadness':
    tj.shine('blue');
    break;
  default:
     break;
  }
}

*/

// CONVERSATION
// function converseDavid() {
// test Watson dialogue
//



// Replace with the context obtained from request
var context = {};
// call back function for speech_to_text service

function speechToText(text) {
  console.log('David hears: ', text);
  //if (response.intents && response.intents[0]) {
    //var intent = response.intents[0];
      //if (intent != undefined && intent.intent != undefined) {
        // if intents.intent == "receive-support" {
          // create context variables from tone analyzer for Watson Assistant
    //var context = {};
  getEmotion(text).then((detectedEmotion) => {
    context.emotion = detectedEmotion.emotion;
    //context.emotion = emotion;

    //tj.converse(WORKSPACEID, text, function(response) {
      //console.log(response.intents[0].intent)
    conversation.message(
    {
      workspace_id: WORKSPACEID,
      input: {'text': text},
      context: context
    },

    function(err, response) {
      if (err) {
        console.log('error:', err);
      }
      else {

        if(response.intents.length > 0 && response.intents[0].intent === "receive-support") {
        context = response.context;
        console.log(context);
        //console.log(JSON.stringify(response, null, 2));
        david_response = response.output.text[0];
        tj.speak(david_response);
        console.log('David says: ' + david_response);
        }
      }
    });
  });
}

// Opens the microphone and streams data to the speech_to_text service
// callback function getEmotion is called with speech utterances as they are produced
tj.listen(speechToText);








