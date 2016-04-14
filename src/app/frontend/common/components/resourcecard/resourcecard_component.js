// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Controller for the resource card component.
 * @final
 */
export class ResourceCardController {
  /**
   * @ngInject
   */
  constructor() {
    /**
     * Initialized from a binding.
     * @export {!backendApi.ResourceMetadata}
     */
    this.resourceMetadata;
  }
}

/**
 * Represents a resource card in a tabularized list. Should always be used when showing
 * lists of resources.
 *
 * Usage:
 * <kd-resource-card>
 *   <kd-resource-card-status>X</kd-resource-card-status>
 *   <kd-resource-card-columns>
 *     <kd-resource-card-column>
 *        MY CUSTOM COLUMN 1
 *     </kd-resource-card-column>
 *     <kd-resource-card-column>
 *       MY CUSTOM COLUMN 2
 *     </kd-resource-card-column>
 *     <kd-resource-card-column>
 *       MY CUSTOM COLUMN 3
 *     </kd-resource-card-column>
 *   </kd-resource-card-columns>
 *   <kd-resource-card-footer>MY CUSTOM FOOTER</kd-resource-card-footer>
 * </kd-resource-card>
 *
 * @type {!angular.Component}
 */
export const resourceCardComponent = {
  bindings: {
    /** type {!backendApi.ResourceMetadata} Metadata of the resource displayed in the card. */
    'resourceMetadata': '<',
  },
  controller: ResourceCardController,
  templateUrl: 'common/components/resourcecard/resourcecard.html',
  transclude: /** @type {undefined} TODO(bryk): Remove this when externs are fixed */ ({
    'status': '?kdResourceCardStatus',
    'columns': '?kdResourceCardColumns',
    'footer': '?kdResourceCardFooter',
  }),
};