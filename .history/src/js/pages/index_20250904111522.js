import '../../styles/index.scss'
import '../../styles/pages/index.scss'
import InfiniteGrid from '../components/infinite-grid'

export default class Index {
	constructor() {
		window.addEventListener('resize', this.resize.bind(this))
		this.resize()

		// Initialize about page transition
		this.initAboutTransition()

		this.sources = [
			{
				src: '1.jpg',
				caption: '',
			},
			{
				src: '2.jpg',
				caption: '',
			},
			{
				src: '3.jpg',
				caption: '',
			},
			{
				src: '4.jpg',
				caption: '',
			},
			{
				src: '5.jpg',
				caption: '',
			},
			{
				src: '6.jpg',
				caption: '',
			},
			{
				src: '7.jpg',
				caption: '',
			},
			{
				src: '8.jpg',
				caption: '',
			},
			{
				src: '9.jpg',
				caption: '',
			},
			{
				src: '10.jpg',
				caption: '',
			},
			{
				src: '11.jpg',
				caption: '',
			},
			{
				src: '12.jpg',
				caption: '',
			},
			{
				src: '13.jpg',
				caption: '',
			},
			{
				src: '14.jpg',
				caption: '',
			},
		]
		this.data = [
			{ x: 434, y: 267, w: 204, h: 306 },
			{ x: 1014, y: 717, w: 275, h: 183 },
			{ x: 29, y: 99, w: 230, h: 307 },
			{ x: 246, y: 787, w: 316, h: 225 },
			{ x: 51, y: 454, w: 415, h: 242 },
			{ x: 1228, y: 524, w: 173, h: 231 },
			{ x: 711, y: 528, w: 271, h: 151 },
			{ x: 1086, y: 32, w: 342, h: 380 },
			{ x: 787, y: 267, w: 365, h: 245 },
			{ x: 193, y: 15, w: 382, h: 235 },
			{
				x: 537,
				y: 696,
				w: 239,
				h: 279,
			},
			{
				x: 703,
				y: 0,
				w: 358,
				h: 222,
			},
			{
				x: 895,
				y: 623,
				w: 176,
				h: 242,
			},
			{
				x: 23,
				y: 658,
				w: 151,
				h: 205,
			},
		]
		new InfiniteGrid({
			el: document.querySelector('#images'),
			sources: this.sources,
			data: this.data,
			originalSize: { w: 1440, h: 1024 },
		})
	}
	resize() {
		document.documentElement.style.setProperty(
			'--rvw',
			`${document.documentElement.clientWidth / 100}px`
		)
	}

	initAboutTransition() {
		const aboutLink = document.getElementById('about-link')
		const aboutPage = document.getElementById('about-page')
		const aboutClose = document.getElementById('about-close')
		const transitionOverlay = document.getElementById('transition-overlay')
		const transitionDiv1 = document.querySelector('.transition-div-1')
		const transitionDiv2 = document.querySelector('.transition-div-2')

		aboutLink.addEventListener('click', (e) => {
			e.preventDefault()
			this.showAboutPage(transitionDiv1, transitionDiv2, aboutPage)
		})

		aboutClose.addEventListener('click', () => {
			this.hideAboutPage(transitionDiv1, transitionDiv2, aboutPage)
		})

		// Close on escape key
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && aboutPage.classList.contains('active')) {
				this.hideAboutPage(transitionDiv1, transitionDiv2, aboutPage)
			}
		})
	}

	showAboutPage(div1, div2, aboutPage) {
		// Start the transition animation
		div1.classList.add('active')
		div2.classList.add('active')

		// Show about page after transition completes
		setTimeout(() => {
			aboutPage.classList.add('active')
		}, 800)

		// Remove transition divs after about page is visible
		setTimeout(() => {
			div1.classList.remove('active')
			div2.classList.remove('active')
		}, 1300)
	}

	hideAboutPage(div1, div2, aboutPage) {
		// Start reverse transition immediately (keep about page visible)
		// Position divs at top for reverse animation
		div1.style.bottom = '0'
		div2.style.bottom = '0'
		div1.style.transform = 'translateY(0)'
		div2.style.transform = 'translateY(0)'

		// Add reverse class and trigger animation
		div1.classList.add('reverse', 'active')
		div2.classList.add('reverse', 'active')

		// Make about page slide down with the transition
		aboutPage.classList.add('sliding-down')

		// Remove transition divs after reverse animation completes
		setTimeout(() => {
			div1.classList.remove('reverse', 'active')
			div2.classList.remove('reverse', 'active')
			// Reset positioning
			div1.style.bottom = ''
			div2.style.bottom = ''
			div1.style.transform = ''
			div2.style.transform = ''
			// Hide about page after animation completes
			aboutPage.classList.remove('active', 'sliding-down')
		}, 1300)
	}
}
window.addEventListener('load', () => {
	new Index()
})
