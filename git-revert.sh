#!/bin/bash

# Deletes files/dirs listed in .gitignore (like build files)
# Deletes files/dirs that are not tracked and not in .gitignore
env -i git clean --force -d -x
# Reverts changes maded in tracked files,
# Restores deleted tracked files
env -i git reset --hard
