
import Fullpage from './Fullpage'

class App {
  startFullpageExperience () {
    const fp = new Fullpage('#fullpage', {
      showActiveTooltip: true,
      slidesNavigation: true,
      slidesNavPosition: 'right',
      parallax: true,
      scrollOverflow: false
    })
    fp.init()
  }

  start () {
    this.startFullpageExperience()
  }
}

export default App
