# Studend sub orbital unified telemetry handler

**This is a project created and managed by WüSpace e.V.**

S²OUTH is a project developing a modern and reliable telemetry system. The goal of the system is to provide live telemetry including sensor data, and high precision pose estimation for the entire duration of a suborbital spaceshot flight. Furthermore the project includes a secondary high bandwidth RF link to stream high fidelity video of the rocket during the flight.

The project was originally conceived in collaboration with the student team from HyEnD Stuttgart for usage in their N₂ORTH hybrid propellant rocket. Since then a preliminary version of the project named South Cube has flown as payload on the Ispida rocket build by Aerospace Team Graz (ASTG) and further options for collaborations with student teams are being explored.

go to the [website](https://south.wuespace.de/) to learn more about the project

<!--autoindex:start-->
S²OUTH Repository Navigation
----------------------------

### PCBs (software)
URL | Description
--- | ---:
[pyro](https://github.com/S2outh/pyro) | Actuation of recovery pyrotechnic charges
[eps](https://github.com/S2outh/eps) | Battery management and power distribution
[lower-sensor](https://github.com/S2outh/lower-sensor) | Tank and Engine pressure and temperature monitoring
[radio-ground](https://github.com/S2outh/radio-ground) | Telemetry reception
[radio-air](https://github.com/S2outh/radio-air) | Telemetry transmission
[upper-sensor](https://github.com/S2outh/upper-sensor) | IMU, Magneto and GPS data aquisition and filtering for position estimation
[umbilical](https://github.com/S2outh/umbilical) | On-pad communications via ethernet
[black-box](https://github.com/S2outh/black-box) | Reliable CAN data logging
### Ground Support (GSE)
URL | Description
--- | ---:
[trex](https://github.com/S2outh/trex) | T-Rex Antenna Tracking Software
[frontend-viewer](https://github.com/S2outh/frontend-viewer) | 
### Main Server
URL | Description
--- | ---:
[south-database](https://github.com/S2outh/south-database) | 
### Libraries
URL | Description
--- | ---:
[embassy-nats](https://github.com/S2outh/embassy-nats) | A implementation of the NATS client protocol using embassy-net. It currently requires alloc.
[south-common](https://github.com/S2outh/south-common) | Definition of all telemetry values and their respective types used in the south project
[chell-sys](https://github.com/S2outh/chell-sys) | 
[rocketlst-driver](https://github.com/S2outh/rocketlst-driver) | 
[wfb-rs](https://github.com/S2outh/wfb-rs) | Rewriting wifibroadcast in Rust
[imu-driver](https://github.com/S2outh/imu-driver) | imu
[magneto-driver](https://github.com/S2outh/magneto-driver) | 
[baro-driver](https://github.com/S2outh/baro-driver) | 
### Other
- [.github](https://github.com/S2outh/.github) Automatic Organization Navigation Menu
- [umbilical-linux](https://github.com/S2outh/umbilical-linux) CAN-NATS translation layer that emulates the functionality of the umbilical board
- [radio-linux-ground](https://github.com/S2outh/radio-linux-ground) 
- [rocketlst-firmware](https://github.com/S2outh/rocketlst-firmware) 
- [setup-probe-rs-action](https://github.com/S2outh/setup-probe-rs-action) Action to ensure probe-rs is installed on the runner
- [hil-tests](https://github.com/S2outh/hil-tests) 
- [sensor_fusion](https://github.com/S2outh/sensor_fusion) 
- [test-indicator-led-control-server](https://github.com/S2outh/test-indicator-led-control-server) Server to control the test indicator led
<!--autoindex:end-->