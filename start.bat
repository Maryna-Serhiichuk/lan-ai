@echo off
cd packages/backend
start cmd /k "yarn develop"
cd ..\frontend
start cmd /k "yarn start"