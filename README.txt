Due to a bug in IntelliJ on linux this is currently a .txt and not a .md file

# Code for Fintools Research Project
A relatively simple application that applies the theoretical ideas.

## General Notes:
This is designed to be a monolithic one-deployable-container application, which heavily influences the structure of the overall thing.
Also, it's the first Golang application I wrote, so code structure and quality may not be top notch.
And it's a prototype / demo application, there are a few open ends and there definitely is some general optimization potential.

## Note on the database:
You may look through the code and wonder "why didn't this guy use a proper database?"
-> The simple reason for that is that it is an explicit requirement for this application to be deployable without the need for a database setup.
-> all data is stored using plain JSON files, both input and output.

### Data Collection
The application does not use any tracking cookies. All data collected via questionnaires and feedback is anonymous.
That's also why there is no captcha, to avoid any state apart from the answers.

Output files as JSON can be downloaded through a "secure" (e.g. not really secure, see below) admin endpoint.

## Note on security
The admin endpoints to download results are theoretically protected by Basic Auth, however, the password is hardcoded due to this being a demo app.
This only serves as a tripwire to super basic webcrawlers and stuff. The data that can be downloaded is completely anonymous anyway.

Password can be injected by Viper via an ENV variable to make this a bit secure.

## Deployment
The docker image (AMD64 only, ARM is not supported out of the box) is hosted at quay.io/ckmuun/fintools-prototype. It's relatively big, but contains everything.

$ docker pull quay.io/ckmuun/fintools-prototype:latest
$ docker run -p 8080:8080 quay.io/ckmuun/fintools-prototype:latest

Should work on VMs of all major cloud providers, please see the individual provider documentation on how to then set up a public IP or Domain pointing to the application.
Should also work with K8s.
Should also work with K8s.
