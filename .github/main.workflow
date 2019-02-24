workflow "Vulnerablity Alerts" {
  on = "repository_vulnerability_alert"
  resolves = ["GitHub Action for Slack"]
}

action "GitHub Action for Slack" {
  uses = "Ilshidur/action-slack@6286a077a2b77159fcc4f425a9e714173d374616"
  args = "New Vulnerable dependency detected on SOSC-Website"
  secrets = ["SLACK_WEBHOOK"]
}
