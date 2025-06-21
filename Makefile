unit-test:
	npm test
functional-test:
	npm test -- --roots test/functional
e2e-test:
	npm test -- --roots test/e2e
generate-cfn-ts-codes:
	ts-node  ./scripts/generate-cfn-ts-codes/main.ts