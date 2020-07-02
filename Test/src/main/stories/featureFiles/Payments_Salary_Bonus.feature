Feature: Payments to Sales Staff

  Scenario Outline: Verify the report which contains dates when the salaries and Bonuses need to be paid for all months
    Given I have sales staff payroll file report
    When I open file and I should see the dates of "<BaseSalaries>" and "<Bonuses>" are need to be processed for all "<Months>" for sales staff
    Then I should close the report file

    Examples: 
      | BaseSalaries | Bonuses | Months    |
      | 200000       | 60000   | January   |
      | 200000       | 60000   | February  |
      | 200000       | 60000   | March     |
      | 200000       | 60000   | April     |
      | 200000       | 60000   | May       |
      | 200000       | 60000   | June      |
      | 200000       | 60000   | July      |
      | 200000       | 60000   | August    |
      | 200000       | 60000   | September |
      | 200000       | 60000   | Octobert  |
      | 200000       | 60000   | November  |
      | 200000       | 60000   | December  |

  Scenario Outline: Verify the Base Salaries are paid on last day of the month unless that day is a Saturday or a Sunday (Weekend) then base salaries are paid on last day before the weekend
    Given I have sales staff payroll file report
    When I open file and I should see the dates of "<BaseSalaries>" are need to be processed for all "<Months>" for sales staff
    Then I should see "<BaseSalaries>" need to be paid on last day of the month unless that day is "Saturday" or a "Sunday" then base salaries are paid on the last day before the weekend
    And I should update base salaries dates for the "<Months>" in the file and close the report file

    Examples: 
      | BaseSalaries | Months    |
      | 200000       | January   |
      | 200000       | February  |
      | 200000       | March     |
      | 200000       | April     |
      | 200000       | May       |
      | 200000       | June      |
      | 200000       | July      |
      | 200000       | August    |
      | 200000       | September |
      | 200000       | October   |
      | 200000       | November  |
      | 200000       | December  |

  Scenario Outline: Verify the Bonuses are paid on the 15th of every month, unless that day is a weekend then they are paid the first Wednesday after the 15th
    Given I have sales staff payroll file report
    When I open file and I should see the dates of "<Bonuses>" are need to be processed for all "<Months>" for sales staff
    Then I should see "<Bonuses>" need to be paid on "15th" of every month unless that day is "Saturday" or a "Sunday" then bonuses are paid on the first "Wednesday" after the "15th"
    And I should update bonuses dates for the "<Months>" in the file and close the report file

    Examples: 
      | Bonuses | Months    |
      | 60000   | January   |
      | 60000   | February  |
      | 60000   | March     |
      | 60000   | April     |
      | 60000   | May       |
      | 60000   | June      |
      | 60000   | July      |
      | 60000   | August    |
      | 60000   | September |
      | 60000   | October   |
      | 60000   | November  |
      | 60000   | December  |

  Scenario Outline: Verify if the report file does not contains Base salaries and Bonuses for any month
    Given I have sales staff payroll file report
    When I open file and check "<BaseSalaries>" and "<Bonuses>" available for all "<Months>" for sales staff
    Then It should throw message "either Base salaries or Bonuses are not displayed" for the "<Months>" month

    Examples: 
      | BaseSalaries | Bonuses | Months    |
      | 200000       | 60000   | January   |
      | 200000       | 60000   | February  |
      | 200000       | 60000   | March     |
      | 200000       | 60000   | April     |
      | 200000       | 60000   | May       |
      | 200000       | 60000   | June      |
      | 200000       | 60000   | July      |
      | 200000       | 60000   | August    |
      | 200000       | 60000   | September |
      | 200000       | 60000   | Octobert  |
      | 200000       | 60000   | November  |
      | 200000       | 60000   | December  |
