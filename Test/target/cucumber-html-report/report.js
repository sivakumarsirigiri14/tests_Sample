$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featureFiles/AddtoBasketAndPurchaseItems.feature");
formatter.feature({
  "line": 1,
  "name": "purchase item",
  "description": "",
  "id": "purchase-item",
  "keyword": "Feature"
});
formatter.before({
  "duration": 33924144478,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Adding to bakset and purchase",
  "description": "",
  "id": "purchase-item;adding-to-bakset-and-purchase",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on My Store form",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login as registered user email \"rtqdl@kqhuh.com\" and password \"jonnyhiles\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I add first item to the cart from the dresses section",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Proceed to checkout with the default delivery address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I accept the terms and conditions for Shipping",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select payment method as \"Bank-wire payment\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I confirm my order",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see my order is created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStorePortalSteps.i_am_on_My_Store_form()"
});
formatter.result({
  "duration": 12501514322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rtqdl@kqhuh.com",
      "offset": 34
    },
    {
      "val": "jonnyhiles",
      "offset": 65
    }
  ],
  "location": "MyStorePortalSteps.i_login_as_registered_user_email_and_password(String,String)"
});
formatter.result({
  "duration": 11173520959,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 128925648,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.i_add_first_item_to_the_cart_from_the_dresses_section()"
});
formatter.result({
  "duration": 13118921542,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.proceed_to_checkout_with_the_default_delivery_address()"
});
formatter.result({
  "duration": 5331306825,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.i_accept_the_terms_and_conditions_for_Shipping()"
});
formatter.result({
  "duration": 2332922929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank-wire payment",
      "offset": 26
    }
  ],
  "location": "MyStorePortalSteps.select_payment_method_as(String)"
});
formatter.result({
  "duration": 231023290,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.i_confirm_my_order()"
});
formatter.result({
  "duration": 3121208635,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.i_should_see_my_order_is_created_successfully()"
});
formatter.result({
  "duration": 117936656,
  "status": "passed"
});
formatter.after({
  "duration": 14434599,
  "status": "passed"
});
formatter.before({
  "duration": 9400830077,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login Unsuccessfully",
  "description": "",
  "id": "purchase-item;login-unsuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I am on My Store form",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I login with unregistered user email \"Robert@Smith.com\" and password \"RobertSmith\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should throw Authentication failed error",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStorePortalSteps.i_am_on_My_Store_form()"
});
formatter.result({
  "duration": 7294362667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Robert@Smith.com",
      "offset": 38
    },
    {
      "val": "RobertSmith",
      "offset": 70
    }
  ],
  "location": "MyStorePortalSteps.i_login_with_unregistered_user_email_and_password(String,String)"
});
formatter.result({
  "duration": 6459313872,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.i_should_throw_Authentication_failed_error()"
});
formatter.result({
  "duration": 584150294,
  "status": "passed"
});
formatter.after({
  "duration": 21466511,
  "status": "passed"
});
formatter.uri("featureFiles/RegisterAndLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Register user login successfully",
  "description": "",
  "id": "register-user-login-successfully",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "create new user and verify logout and login back",
  "description": "",
  "id": "register-user-login-successfully;create-new-user-and-verify-logout-and-login-back",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on My Store form",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Sign in option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "It should allow email to create account",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click on Create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I fill the registration details as \"\u003cTitle\u003e\",\"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cPassword\u003e\",\"\u003cAddressLine1\u003e\",\"\u003cCity\u003e\",\"\u003cState\u003e\",\"\u003cPostCode\u003e\",\"\u003cCountry\u003e\" and \"\u003cMobilePhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully as registered user",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should logout successfully",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I login back to my store portal using above created user and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "register-user-login-successfully;create-new-user-and-verify-logout-and-login-back;",
  "rows": [
    {
      "cells": [
        "Title",
        "FirstName",
        "LastName",
        "Password",
        "AddressLine1",
        "City",
        "State",
        "PostCode",
        "Country",
        "MobilePhone"
      ],
      "line": 16,
      "id": "register-user-login-successfully;create-new-user-and-verify-logout-and-login-back;;1"
    },
    {
      "cells": [
        "Mr.",
        "Jonny",
        "Hiles",
        "jonnyhiles",
        "2850 Reynard Way Apt 7",
        "San Diego",
        "California",
        "92103",
        "United States",
        "0123456789"
      ],
      "line": 17,
      "id": "register-user-login-successfully;create-new-user-and-verify-logout-and-login-back;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11967326822,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "create new user and verify logout and login back",
  "description": "",
  "id": "register-user-login-successfully;create-new-user-and-verify-logout-and-login-back;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on My Store form",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Sign in option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "It should allow email to create account",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click on Create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I fill the registration details as \"Mr.\",\"Jonny\",\"Hiles\",\"jonnyhiles\",\"2850 Reynard Way Apt 7\",\"San Diego\",\"California\",\"92103\",\"United States\" and \"0123456789\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully as registered user",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should logout successfully",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I login back to my store portal using above created user and password \"jonnyhiles\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStorePortalSteps.i_am_on_My_Store_form()"
});
formatter.result({
  "duration": 6067964025,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.i_click_on_Sign_in_option()"
});
formatter.result({
  "duration": 300288666,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.it_should_allow_email_to_create_account()"
});
formatter.result({
  "duration": 2113075515,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.i_click_on_Create_an_account_button()"
});
formatter.result({
  "duration": 1110761481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 36
    },
    {
      "val": "Jonny",
      "offset": 42
    },
    {
      "val": "Hiles",
      "offset": 50
    },
    {
      "val": "jonnyhiles",
      "offset": 58
    },
    {
      "val": "2850 Reynard Way Apt 7",
      "offset": 71
    },
    {
      "val": "San Diego",
      "offset": 96
    },
    {
      "val": "California",
      "offset": 108
    },
    {
      "val": "92103",
      "offset": 121
    },
    {
      "val": "United States",
      "offset": 129
    },
    {
      "val": "0123456789",
      "offset": 149
    }
  ],
  "location": "MyStorePortalSteps.i_fill_the_registration_details_as_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3940607440,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.i_click_on_Register_button()"
});
formatter.result({
  "duration": 1897263443,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.i_should_login_successfully_as_registered_user()"
});
formatter.result({
  "duration": 41225399,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.i_should_logout_successfully()"
});
formatter.result({
  "duration": 2016391971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jonnyhiles",
      "offset": 71
    }
  ],
  "location": "MyStorePortalSteps.i_login_back_to_my_store_portal_using_above_created_user_and_password(String)"
});
formatter.result({
  "duration": 4459859559,
  "status": "passed"
});
formatter.match({
  "location": "MyStorePortalSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 41590187,
  "status": "passed"
});
formatter.after({
  "duration": 14865246,
  "status": "passed"
});
});