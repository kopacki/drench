
ELM_ENTRYPOINT_PATH=src/App.elm
JS_ARTEFACT_FILE_NAME=build/app-artifact.js

bootstrap:
	npm -g install elm elm-review elm-test elm-format elm-live uglify-js

build:
	elm make $(ELM_ENTRYPOINT_PATH) --output=$(JS_ARTEFACT_FILE_NAME)

build-debug:
	elm make $(ELM_ENTRYPOINT_PATH) --output=$(JS_ARTEFACT_FILE_NAME) --debug

build-watch: build
	elm-live $(ELM_ENTRYPOINT_PATH) --hot -- --output=$(JS_ARTEFACT_FILE_NAME)

review-watch:
	elm-review --fix-all --watch

test-watch:
	elm-test --watch

# More info can be found at https://github.com/elm/compiler/blob/master/hints/optimize.md
build-prod:
	elm make $(ELM_ENTRYPOINT_PATH) --output=$(JS_ARTEFACT_FILE_NAME) --optimize
	uglifyjs $(JS_ARTEFACT_FILE_NAME) --compress "pure_funcs=[F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9],pure_getters,keep_fargs=false,unsafe_comps,unsafe" | uglifyjs --mangle --output $(JS_ARTEFACT_FILE_NAME)