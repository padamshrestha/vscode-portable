/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!function(){"use strict";var e=self.MonacoEnvironment,r=e&&e.baseUrl?e.baseUrl:"../../../";importScripts(r+"vs/loader.js"),require.config({baseUrl:r,catchError:!0});var s=[];self.onmessage=function(e){return s.push(e)},require(["vs/base/common/worker/workerServer"],function(e){var r=e.create(function(e){self.postMessage(e)},null);for(self.onmessage=function(e){return r.onmessage(e.data)};s.length>0;)self.onmessage(s.shift())})}();