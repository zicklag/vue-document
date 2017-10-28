/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title injector.
 *
 * @param document https://developer.mozilla.org/en-US/docs/Web/API/Document reference
 *
 * @example
 * <pre>
 * new Vue({
 *   document: {
 *     head: {
 *       title: 'custom title'
 *     }
 *   },
 *   ...
 * })
 * </pre>
 */
export default function (document) {
  var metadata = this.$root.$document
  var title = 'Untitled'
  if (metadata.head && metadata.head.title) {
    title = metadata.head.title
  }
  document.title = title
}
