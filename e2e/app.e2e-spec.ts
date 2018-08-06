import { SocketAppPage } from './app.po';

describe('socket-app App', () => {
  let page: SocketAppPage;

  beforeEach(() => {
    page = new SocketAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
