import chai from 'chai';
import chaiDom from 'chai-dom';
import sinonChai from 'sinon-chai';
import jsdom from 'mocha-jsdom';

chai
  .use(chaiDom)
  .use(sinonChai);

export default () => jsdom();
