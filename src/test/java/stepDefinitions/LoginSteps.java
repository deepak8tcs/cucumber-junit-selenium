package stepDefinitions;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

	// any of  two regex works fine for step definition param: \"(.*)\"  and   \"([^\"]*)\"

	@Given("^\"(.*)\" is on login page$")
	public void is_on_login_page(String user) {
		System.out.println(user);
	}

	@Given("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password)  {
		System.out.println(username);
		System.out.println(password);
	}

	@When("^user clicks on SignIn button$")
	public void user_clicks_on_SignIn_button()  {

	}

	@Then("^user should be logged in successfully$")
	public void user_should_be_logged_in_successfully()  {

	}

	@When("^user enters username and password and clicks sign in$")
	public void user_enters_username_and_password_and_clicks_sign_in(DataTable dataTable)  {
		
		List<Map<String,String>> credentials =dataTable.asMaps(String.class, String.class);
		
		for(Map<String,String> credential:credentials) {
			System.out.println(credential.get("username"));
			System.out.println(credential.get("password"));
		}
	}


}
