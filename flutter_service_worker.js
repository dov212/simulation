'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0d892b336f0cbb19f1b42769674137b0",
"index.html": "ffac6482980a6f30666b0e23a91ad28f",
"/": "9db2e642e8408fe06565d04ecf682094",
"test/widget_test.dart": "6b2218306343168469bea21c0f53457c",
"main.dart.js": "6885b712e18001c19b6a39361af89881",
"web/index.html": "c3629e460ce031f26c5625da73be26ad",
"web/test/widget_test.dart": "6b2218306343168469bea21c0f53457c",
"web/web/index.html": "6dfd3b1f882cd8f0814b4228a6878062",
"web/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/web/manifest.json": "1f566b509698542d126fbd8f162102f7",
"web/pubspec.lock": "84c48240315285b57812c541f0f325f0",
"web/ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"web/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"web/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"web/ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"web/ios/Runner/GeneratedPluginRegistrant.h": "51e4cefb306d339b47a67bb0477a1d27",
"web/ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"web/ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"web/ios/Runner/AppDelegate.swift": "640effd31ad5be56ac222976d95a5878",
"web/ios/Runner/GeneratedPluginRegistrant.m": "7c20af7f75e9fa38e8686b147b13159a",
"web/ios/Runner/Info.plist": "ed046f74abf3f49ccb6cd7498b037b6c",
"web/ios/Runner.xcodeproj/project.pbxproj": "fb7253a95a40118273dea45c6d241cac",
"web/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"web/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"web/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"web/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "74fd196a515b5a746527f7b275f8785b",
"web/ios/Flutter/flutter_export_environment.sh": "830677d1897455d1f6b82092fa1b4f84",
"web/ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"web/ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"web/ios/Flutter/AppFrameworkInfo.plist": "3c00b2cf8a8ead87c06edee95b639fe9",
"web/ios/Flutter/Generated.xcconfig": "fe2f09d04aa29a1617e3fc10500d6719",
"web/README.md": "819ac07eefd10498065880dd0d4e318e",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/pubspec.yaml": "3f747d86a5668ae788ce6b2d808eeaa4",
"web/android/app/build.gradle": "5ed6a2a9a6fa3018922253d574e13115",
"web/android/app/src/profile/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"web/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"web/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"web/android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"web/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"web/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"web/android/app/src/main/res/values-night/styles.xml": "38d2da8c073ef21cb1ea7c8bb237caa5",
"web/android/app/src/main/res/values/styles.xml": "8c2485c661cc2eecc76d6ac7e61e236d",
"web/android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"web/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"web/android/app/src/main/AndroidManifest.xml": "0991df1bb2ebbcfe5481551937b7ba68",
"web/android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "52533b7c97ea341b8c6a13aba97f53e6",
"web/android/app/src/main/kotlin/com/example/web/MainActivity.kt": "43434a410f350a43526ada5ffea4d5ae",
"web/android/app/src/debug/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"web/android/local.properties": "ce8da5c32ef0ba103020dbd084c3892f",
"web/android/web_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"web/android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"web/android/gradle/wrapper/gradle-wrapper.properties": "4a3ac42d3bba3464a5c2ed6ccb15ccf9",
"web/android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"web/android/build.gradle": "1fac9806f98889b622cfd00e4bcae8b1",
"web/android/gradle.properties": "4a756df24e4431aa00ea27ee9b863c97",
"web/android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"web/android/settings.gradle": "10881f279cc48040996c7354515e0da7",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/manifest.json": "1f566b509698542d126fbd8f162102f7",
"web/lib/main.dart": "486d758024205cbd505432a1107cff0b",
"web/build/ios/Runner.build/Release-iphoneos/Runner.build/dgph": "109927ad92e35f6122b3ff79d5d7902e",
"web/.dart_tool/package_config.json": "45452a18a76437f64696dbde358cc421",
"web/.dart_tool/package_config_subset": "1fd3b9ea186ca5ebf3a156710fb1d664",
"web/.dart_tool/version": "7d30aa8b30a57b85d658fcd54426884a",
"web/web.iml": "0e10d326c956d57be354882dfdf4d740",
"web/.idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
"web/.idea/libraries/Dart_SDK.xml": "27cde5c7b522358cd030eb4cf533dd44",
"web/.idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
"web/.idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
"web/.idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769",
"pubspec.lock": "84c48240315285b57812c541f0f325f0",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"ios/Runner/GeneratedPluginRegistrant.h": "51e4cefb306d339b47a67bb0477a1d27",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"ios/Runner/AppDelegate.swift": "640effd31ad5be56ac222976d95a5878",
"ios/Runner/GeneratedPluginRegistrant.m": "7c20af7f75e9fa38e8686b147b13159a",
"ios/Runner/Info.plist": "ed046f74abf3f49ccb6cd7498b037b6c",
"ios/Runner.xcodeproj/project.pbxproj": "fb7253a95a40118273dea45c6d241cac",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "74fd196a515b5a746527f7b275f8785b",
"ios/Flutter/flutter_export_environment.sh": "141400a01b5f4a7f8ffe6922e7f3b898",
"ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/AppFrameworkInfo.plist": "3c00b2cf8a8ead87c06edee95b639fe9",
"ios/Flutter/Generated.xcconfig": "fcb46d7cea14db22004a5e5fdfa01a21",
"README.md": "819ac07eefd10498065880dd0d4e318e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pubspec.yaml": "3f747d86a5668ae788ce6b2d808eeaa4",
"android/app/build.gradle": "5ed6a2a9a6fa3018922253d574e13115",
"android/app/src/profile/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/values-night/styles.xml": "38d2da8c073ef21cb1ea7c8bb237caa5",
"android/app/src/main/res/values/styles.xml": "8c2485c661cc2eecc76d6ac7e61e236d",
"android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/AndroidManifest.xml": "0991df1bb2ebbcfe5481551937b7ba68",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "52533b7c97ea341b8c6a13aba97f53e6",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "43434a410f350a43526ada5ffea4d5ae",
"android/app/src/debug/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"android/local.properties": "ce8da5c32ef0ba103020dbd084c3892f",
"android/web_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "4a3ac42d3bba3464a5c2ed6ccb15ccf9",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/build.gradle": "1fac9806f98889b622cfd00e4bcae8b1",
"android/gradle.properties": "4a756df24e4431aa00ea27ee9b863c97",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/settings.gradle": "10881f279cc48040996c7354515e0da7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5d97c6df9a9db80c0f4a8b501e04b8b4",
"lib/main.dart": "486d758024205cbd505432a1107cff0b",
"build/web/version.json": "1f308f6516a18ecd7674c9a450a742cd",
"build/web/index.html": "629139bb203966350e708ed6d1fae798",
"build/web/test/widget_test.dart": "6b2218306343168469bea21c0f53457c",
"build/web/main.dart.js": "8a87d40758adeb287a8c1c0a8318696e",
"build/web/web/index.html": "9db2e642e8408fe06565d04ecf682094",
"build/web/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/web/manifest.json": "1f566b509698542d126fbd8f162102f7",
"build/web/pubspec.lock": "84c48240315285b57812c541f0f325f0",
"build/web/ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"build/web/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"build/web/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"build/web/ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"build/web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"build/web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"build/web/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"build/web/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"build/web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"build/web/ios/Runner/GeneratedPluginRegistrant.h": "51e4cefb306d339b47a67bb0477a1d27",
"build/web/ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"build/web/ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"build/web/ios/Runner/AppDelegate.swift": "640effd31ad5be56ac222976d95a5878",
"build/web/ios/Runner/GeneratedPluginRegistrant.m": "7c20af7f75e9fa38e8686b147b13159a",
"build/web/ios/Runner/Info.plist": "ed046f74abf3f49ccb6cd7498b037b6c",
"build/web/ios/Runner.xcodeproj/project.pbxproj": "fb7253a95a40118273dea45c6d241cac",
"build/web/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"build/web/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"build/web/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"build/web/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "74fd196a515b5a746527f7b275f8785b",
"build/web/ios/Flutter/flutter_export_environment.sh": "830677d1897455d1f6b82092fa1b4f84",
"build/web/ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"build/web/ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"build/web/ios/Flutter/AppFrameworkInfo.plist": "3c00b2cf8a8ead87c06edee95b639fe9",
"build/web/ios/Flutter/Generated.xcconfig": "fe2f09d04aa29a1617e3fc10500d6719",
"build/web/README.md": "819ac07eefd10498065880dd0d4e318e",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/pubspec.yaml": "3f747d86a5668ae788ce6b2d808eeaa4",
"build/web/android/app/build.gradle": "5ed6a2a9a6fa3018922253d574e13115",
"build/web/android/app/src/profile/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"build/web/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"build/web/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"build/web/android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"build/web/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"build/web/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"build/web/android/app/src/main/res/values-night/styles.xml": "38d2da8c073ef21cb1ea7c8bb237caa5",
"build/web/android/app/src/main/res/values/styles.xml": "8c2485c661cc2eecc76d6ac7e61e236d",
"build/web/android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"build/web/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"build/web/android/app/src/main/AndroidManifest.xml": "0991df1bb2ebbcfe5481551937b7ba68",
"build/web/android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "52533b7c97ea341b8c6a13aba97f53e6",
"build/web/android/app/src/main/kotlin/com/example/web/MainActivity.kt": "43434a410f350a43526ada5ffea4d5ae",
"build/web/android/app/src/debug/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"build/web/android/local.properties": "ce8da5c32ef0ba103020dbd084c3892f",
"build/web/android/web_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"build/web/android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"build/web/android/gradle/wrapper/gradle-wrapper.properties": "4a3ac42d3bba3464a5c2ed6ccb15ccf9",
"build/web/android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"build/web/android/build.gradle": "1fac9806f98889b622cfd00e4bcae8b1",
"build/web/android/gradle.properties": "4a756df24e4431aa00ea27ee9b863c97",
"build/web/android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"build/web/android/settings.gradle": "10881f279cc48040996c7354515e0da7",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/manifest.json": "1f566b509698542d126fbd8f162102f7",
"build/web/lib/main.dart": "486d758024205cbd505432a1107cff0b",
"build/web/build/ios/Runner.build/Release-iphoneos/Runner.build/dgph": "109927ad92e35f6122b3ff79d5d7902e",
"build/web/.dart_tool/package_config.json": "45452a18a76437f64696dbde358cc421",
"build/web/.dart_tool/package_config_subset": "1fd3b9ea186ca5ebf3a156710fb1d664",
"build/web/.dart_tool/version": "7d30aa8b30a57b85d658fcd54426884a",
"build/web/web.iml": "0e10d326c956d57be354882dfdf4d740",
"build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/web/assets/NOTICES": "bde9ee889e7cdb2c908965b81d635c52",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"build/web/.idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
"build/web/.idea/libraries/Dart_SDK.xml": "27cde5c7b522358cd030eb4cf533dd44",
"build/web/.idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
"build/web/.idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
"build/web/.idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769",
"build/ios/Runner.build/Release-iphoneos/Runner.build/dgph": "32dcb344738454cf8faed9d95a4e1cb0",
".dart_tool/package_config.json": "ed28d2918140f9d455770473418db736",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/web_service_worker.stamp": "a84134a6417c70d85fd0ad5253cc030a",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/dart2js.d": "e9488d4d557575addc8feb25820ba2bd",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/main.dart.js.deps": "4708070089ab9ff546d6a83cf2659232",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/main.dart.js": "8a87d40758adeb287a8c1c0a8318696e",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/app.dill": "651eb1e43debc434f537095b2ff46824",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/outputs.json": "d03772dfa0ddd63ec235144e93e70110",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/web_release_bundle.stamp": "6effbc3ca06119132e507446cdefd4b8",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/flutter_assets.d": "7127f573f699eefb151afa2be4409087",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/main.dart": "4e8d7de9489e1a7925e6c95868908224",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/dart2js.stamp": "35139e6475b03ff62594ecef8fb06246",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/service_worker.d": "ff89a0e8a7eac98aa1a21524e8094f7f",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/web_resources.d": "d79ad4065f490972cfb6d7cf377b984d",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/app.dill.deps": "d09b4a3ec4e0c440a1a254c8e6fafb31",
".dart_tool/flutter_build/2a776488c2ded141867fa7c27663cab2/web_entrypoint.stamp": "37486ad98443cd01f4f677c61b0daea6",
".dart_tool/package_config_subset": "835f61a6cc2928510dbc49fe11d3e2a8",
".dart_tool/version": "7d30aa8b30a57b85d658fcd54426884a",
"web.iml": "0e10d326c956d57be354882dfdf4d740",
"assets/AssetManifest.json": "2b232c6967618c187eda2e3dfcf2d20e",
"assets/NOTICES": "525529bae85b80a156d16d0df51d3d3f",
"assets/FontManifest.json": "f29a649fbdd1ea606919af8c36a9bd95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/Dustin.png": "82b64a752029873a6c1f63247fbc967f",
"assets/assets/images/Elizabeth.png": "2393063e0f4a7550de70a60c4b2456ae",
"assets/assets/images/Chloe.png": "613c21f4a48df82f00364759afdfb801",
"assets/assets/images/background.jpg": "81f9ecbbe1ae51bd5d18a20da820b468",
"assets/assets/images/Marty.png": "e8741ddc45b3d52cbc298388b48f285b",
"assets/assets/images/Marta.png": "020961b10b22bf3dcb272eae86ece171",
"assets/assets/images/rdj_v2.png": "f7958f302452e7646ff6a18d5b4aee07",
"assets/assets/images/Frank.png": "3065fbe66bd64bc65aae0df311c439b0",
"assets/assets/images/Kevin_minions.png": "0bd65e49b6c0e819e58f8fd723e69842",
"assets/assets/fonts/WorkSans-Regular.ttf": "6f916ce8ada5d5facf5ad4e1266a486d",
"assets/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/WorkSans-Medium.ttf": "38263ba46663a666f7730f69e804b028",
"assets/assets/fonts/WorkSans-SemiBold.ttf": "9e1952c9d61a6cd14bf2162b85ee61df",
"assets/assets/fonts/WorkSans-Bold.ttf": "a0bf66dd6fc75494a0a51f7662a99c41",
".idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
".idea/libraries/Dart_SDK.xml": "27cde5c7b522358cd030eb4cf533dd44",
".idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
".idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
".idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
