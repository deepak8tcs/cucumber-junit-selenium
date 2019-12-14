$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to application",
  "description": "",
  "id": "login-to-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11645413,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify valid user is able to login successfully",
  "description": "",
  "id": "login-to-application;verify-valid-user-is-able-to-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"austin\" is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters \"username123\" and \"password@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on SignIn button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "austin",
      "offset": 1
    }
  ],
  "location": "LoginSteps.is_on_login_page(String)"
});
formatter.result({
  "duration": 2461928628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username123",
      "offset": 13
    },
    {
      "val": "password@123",
      "offset": 31
    }
  ],
  "location": "LoginSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 466299,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_SignIn_button()"
});
formatter.result({
  "duration": 91921,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 76304,
  "status": "passed"
});
formatter.after({
  "duration": 609980,
  "status": "passed"
});
formatter.before({
  "duration": 202137,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify users are able to login successfully_data table",
  "description": "",
  "id": "login-to-application;verify-users-are-able-to-login-successfully-data-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "\"austin\" is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enters username and password and clicks sign in",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16
    },
    {
      "cells": [
        "username1",
        "password1"
      ],
      "line": 17
    },
    {
      "cells": [
        "username2",
        "password2"
      ],
      "line": 18
    },
    {
      "cells": [
        "username3",
        "password3"
      ],
      "line": 19
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "austin",
      "offset": 1
    }
  ],
  "location": "LoginSteps.is_on_login_page(String)"
});
formatter.result({
  "duration": 534570,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password_and_clicks_sign_in(DataTable)"
});
formatter.result({
  "duration": 27674478,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 109770,
  "status": "passed"
});
formatter.after({
  "duration": 376608,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Verify all valid users are able to login successfully_examples",
  "description": "",
  "id": "login-to-application;verify-all-valid-users-are-able-to-login-successfully-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "\"\u003cuser\u003e\" is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user clicks on SignIn button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "login-to-application;verify-all-valid-users-are-able-to-login-successfully-examples;",
  "rows": [
    {
      "cells": [
        "user",
        "username",
        "password"
      ],
      "line": 30,
      "id": "login-to-application;verify-all-valid-users-are-able-to-login-successfully-examples;;1"
    },
    {
      "cells": [
        "albert1",
        "username1",
        "password1"
      ],
      "line": 31,
      "id": "login-to-application;verify-all-valid-users-are-able-to-login-successfully-examples;;2"
    },
    {
      "cells": [
        "albert2",
        "username2",
        "password2"
      ],
      "line": 32,
      "id": "login-to-application;verify-all-valid-users-are-able-to-login-successfully-examples;;3"
    },
    {
      "cells": [
        "albert3",
        "username3",
        "password3"
      ],
      "line": 33,
      "id": "login-to-application;verify-all-valid-users-are-able-to-login-successfully-examples;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 316369,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify all valid users are able to login successfully_examples",
  "description": "",
  "id": "login-to-application;verify-all-valid-users-are-able-to-login-successfully-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "\"albert1\" is on login page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user enters \"username1\" and \"password1\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user clicks on SignIn button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "albert1",
      "offset": 1
    }
  ],
  "location": "LoginSteps.is_on_login_page(String)"
});
formatter.result({
  "duration": 498426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username1",
      "offset": 13
    },
    {
      "val": "password1",
      "offset": 29
    }
  ],
  "location": "LoginSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 395349,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_SignIn_button()"
});
formatter.result({
  "duration": 70056,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 66933,
  "status": "passed"
});
formatter.after({
  "duration": 235604,
  "status": "passed"
});
formatter.before({
  "duration": 175364,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify all valid users are able to login successfully_examples",
  "description": "",
  "id": "login-to-application;verify-all-valid-users-are-able-to-login-successfully-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "\"albert2\" is on login page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user enters \"username2\" and \"password2\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user clicks on SignIn button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "albert2",
      "offset": 1
    }
  ],
  "location": "LoginSteps.is_on_login_page(String)"
});
formatter.result({
  "duration": 423015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username2",
      "offset": 13
    },
    {
      "val": "password2",
      "offset": 29
    }
  ],
  "location": "LoginSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 414537,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_SignIn_button()"
});
formatter.result({
  "duration": 71841,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 63809,
  "status": "passed"
});
formatter.after({
  "duration": 256130,
  "status": "passed"
});
formatter.before({
  "duration": 4472003,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify all valid users are able to login successfully_examples",
  "description": "",
  "id": "login-to-application;verify-all-valid-users-are-able-to-login-successfully-examples;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "\"albert3\" is on login page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user enters \"username3\" and \"password3\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user clicks on SignIn button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "albert3",
      "offset": 1
    }
  ],
  "location": "LoginSteps.is_on_login_page(String)"
});
formatter.result({
  "duration": 767496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username3",
      "offset": 13
    },
    {
      "val": "password3",
      "offset": 29
    }
  ],
  "location": "LoginSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 522969,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_SignIn_button()"
});
formatter.result({
  "duration": 113339,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 104415,
  "status": "passed"
});
formatter.after({
  "duration": 339573,
  "status": "passed"
});
formatter.before({
  "duration": 269516,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify search feature of Google",
  "description": "",
  "id": "login-to-application;verify-search-feature-of-google",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "user is on google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user enters search text",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "search result should be displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.user_is_on_google_home_page()"
});
formatter.result({
  "duration": 3308848426,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_enters_search_text()"
});
formatter.result({
  "duration": 20487749514,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.search_result_should_be_displayed_correctly()"
});
formatter.result({
  "duration": 3162112560,
  "status": "passed"
});
formatter.after({
  "duration": 321277,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 158407,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify search feature of Google",
  "description": "",
  "id": "google-search;verify-search-feature-of-google",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters search text",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "search result should be displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.user_is_on_google_home_page()"
});
formatter.result({
  "duration": 1670918684,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_enters_search_text()"
});
formatter.result({
  "duration": 4695657936,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.search_result_should_be_displayed_correctly()"
});
formatter.result({
  "duration": 3025834273,
  "status": "passed"
});
formatter.after({
  "duration": 278886,
  "status": "passed"
});
formatter.before({
  "duration": 182057,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify search feature of Google",
  "description": "",
  "id": "google-search;verify-search-feature-of-google",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "\"austin\" is on google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user enters search text \"USA\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "search result should be displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "austin",
      "offset": 1
    }
  ],
  "location": "SearchSteps.is_on_google_home_page(String)"
});
formatter.result({
  "duration": 769654368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 25
    }
  ],
  "location": "SearchSteps.user_enters_search_text(String)"
});
formatter.result({
  "duration": 783073054,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:174)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:181)\r\n\tat stepDefinitions.SearchSteps.user_enters_search_text(SearchSteps.java:52)\r\n\tat ✽.When user enters search text \"USA\"(search.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchSteps.search_result_should_be_displayed_correctly()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1351749221,
  "status": "passed"
});
});