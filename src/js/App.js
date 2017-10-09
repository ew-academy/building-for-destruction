
import Fullpage from './Fullpage'

class App {
  startFullpageExperience () {
    const fp = new Fullpage('#fullpage')
    fp.init()
  }

  start () {
    this.startFullpageExperience()
  }
}

export default App
