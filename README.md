# Liferay Client Extension Experiment

1. Clone this project next to liferay-portal:

```
$ ls
bundles/
liferay-portal/
liferay-client-extension-experiment/
```

2. Ensure that `liferay-portal/modules/sdk/gradle-plugins-workspace/bnd.bnd` has the same version than `com.liferay.gradle.plugins.workspace` in `./settings.gradle` (set to `99.0.0`).
3. Go to `liferay-portal/modules/sdk/gradle-plugins-workspace` and run `gradlew install -Dmaven.repo.local="/home/$(whoami)/.m2/repository` deploy the workspace updated version to local Maven repository.
4. Run `./gradlew deploy`.
5. Check that all client extensions have been deployed in portal log.