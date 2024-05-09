import { module, test } from 'qunit';
import { setupRenderingTest } from 'rarwe/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | band-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<BandList />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <BandList>
        template block text
      </BandList>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
