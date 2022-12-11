#!/usr/bin/env bash
# exit on error
set -o errexit

echo "...Downloading Chrome"
mkdir -p ./chrome
cd ./chrome
wget -P ./ https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
dpkg -x ./google-chrome-stable_current_amd64.deb ./
rm ./google-chrome-stable_current_amd64.deb
cd $HOME/project/src # Make sure we return to where we were