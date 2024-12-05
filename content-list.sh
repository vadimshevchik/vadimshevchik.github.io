#!/bin/bash

array=($(ls -d */ | cut -f1 -d'/'))
for BS_CLIENT_BUNDLE_ID in "${array[@]}"
do
  echo $BS_CLIENT_BUNDLE_ID
done
