#!/bin/bash

# The directory of the target package.json (the one to copy deps from)
SRC_DIR="./src"

# The target package.json filename
SRC_PACKAGE_JSON="project.json"

# The root package.json file
ROOT_PACKAGE_JSON="./package.json"

# Temporarily store the dependencies to be added
TEMP_DEPS_FILE="temp-deps.json"

# Step 1: Extract dependencies and devDependencies from the source package.json
node -e "let pkg=require('./$SRC_DIR/$SRC_PACKAGE_JSON'); const fs=require('fs'); fs.writeFileSync('$TEMP_DEPS_FILE', JSON.stringify({dependencies: pkg.dependencies, devDependencies: pkg.devDependencies}, null, 2));"

# Step 2: Read the temp file and update the root package.json with the new dependencies
node -e "let rootPkg=require('$ROOT_PACKAGE_JSON'); let newDeps=require('./$TEMP_DEPS_FILE'); const fs=require('fs'); rootPkg.dependencies = {...rootPkg.dependencies, ...newDeps.dependencies}; rootPkg.devDependencies = {...rootPkg.devDependencies, ...newDeps.devDependencies}; fs.writeFileSync('$ROOT_PACKAGE_JSON', JSON.stringify(rootPkg, null, 2));"

# Step 3: Remove the temporary dependencies file
rm $TEMP_DEPS_FILE

# Step 4: Install dependencies at root
npm install

echo "Dependencies from $SRC_DIR/$SRC_PACKAGE_JSON have been installed in the root node_modules."
