/**
 * @author Adrian Preuß
 * @version 1.0.0
*/

class Main {
	Language = 'en';
	LanguageCache = {};
	Classes = {
		not_ai_generated: {
			name: 'Not AI generated'
		},
		ai_generated: {
			name: 'AI generated'
		},
		sora: {
			name: 'Sora',
			url: 'https://openai.com/index/sora/'
		},
		pika: {
			name: 'Pika',
			url: 'https://pika.art/try'
		},
		haiper: {
			name: 'Haiper AI',
			url: 'https://haiper.ai/onboarding'
		},
		kling: {
			name: 'KLING AI',
			url: 'https://klingai.com/'
		},
		luma: {
			name: 'Luma AI',
			url: 'https://lumalabs.ai/dream-machine'
		},
		hedra: {
			name: 'Hedra',
			url: 'https://hedra.com/'
		},
		runway: {
			name: 'runway',
			url: 'https://runwayml.com'
		},
		flux: {
			name: 'Flux AI',
			url: 'https://flux-ai.io/'
		},
		sdxlinpaint: {
			name: 'Stable Diffusion XL Inpainting',
			url: 'https://huggingface.co/spaces/diffusers/stable-diffusion-xl-inpainting'
		},
		stablediffusioninpaint: {
			name: 'Stable Diffusion In Paint',
			url: 'https://stable-diffusion-art.com/inpainting_basics/'
		},
		other_image_generators: {
			name: 'Other Image Generators'
		},
		bingimagecreator: {
			name: 'Bing Image-Creator',
			url: 'https://www.bing.com/images/create'
		},
		adobefirefly: {
			name: 'Adobe Firefly',
			url: 'https://www.adobe.com/products/firefly.html'
		},
		lcm: {
			name: 'Text-to-Image'
		},
		dalle: {
			name: 'Dall-E',
			url: 'https://openai.com/index/dall-e-3/'
		},
		pixart: {
			name: 'pixart',
			url: 'https://pixart-alpha.github.io'
		},
		glide: {
			name: 'Glide AI',
			url: 'https://www.glideapps.com/docs/ai'
		},
		stablediffusion: {
			name: 'Stable Diffusion',
			url: 'https://stablediffusionweb.com/de'
		},
		imagen: {
			name: 'Imagen',
			url: 'https://imagen-ai.com/de/'
		},
		amused: {
			name: 'aMUSEd',
			url: 'https://huggingface.co/blog/amused'
		},
		stablecascade: {
			name: 'Stable Cascade',
			url: 'https://stablecascade.org'
		},
		midjourney: {
			name: 'Midjourney',
			url: 'https://www.midjourney.com/home'
		},
		deepfloyd: {
			name: 'DeepFloyd',
			url: 'https://huggingface.co/DeepFloyd'
		},
		gan: {
			name: 'Gan.AI',
			url: 'https://gan.ai'
		},
		stablediffusionxl: {
			name: 'Stable Diffusion XL',
			url: 'https://stablediffusionxl.com'
		},
		vqdiffusion: {
			name: 'VQ-Diffusion',
			url: 'https://github.com/microsoft/VQ-Diffusion'
		},
		kandinsky: {
			name: 'Kandinsky',
			url: 'https://fusionbrain.ai/en/'
		},
		wuerstchen: {
			name: 'Würstchen',
			url: 'https://github.com/dome272/Wuerstchen'
		},
		titan: {
			name: 'TitanAI',
			url: 'https://titangen.app'
		},
		ideogram: {
			name: 'Ideogram',
			url: 'https://ideogram.ai/'
		},
		none: {
			name: 'None'
		},
		inconclusive: {
			name: 'Inconclusive'
		},
		inconclusive_video: {
			name: 'Inconclusive Video'
		},
		deepfake: {
			name: 'deepfake'
		}
	};
	Results = null;
	Toast = null;
	Data = null;
	Upload = null;
	Proxies = [
		'https://test.cors.workers.dev/?'
	];

	constructor() {
		this.Data		= document.querySelector('div#results');
		this.Toast		= new bootstrap.Toast(document.querySelector('div.toast'));
		this.Results	= new bootstrap.Modal(this.Data);
		this.Upload		= new Dropzone(document.querySelector('ui-drag'), {
			url:		this.getRandomProxy('https://plugin.hivemoderation.com/api/v1/image/ai_detection'),
			paramName:	'media',
			params:		{
				'request_id': this.generateUniqSerial()
			},
			disablePreviews:	true,
			defaultHeaders:		false
		});

		this.Upload.on("success", (file, response, e) => {
			let image = new Image();
			image.src = file.dataURL;
			this.fillResults(image, response);
		});

		document.querySelector('ui-drag').addEventListener('click',this.onClick);

		this.Language = this.loadLanguage();
		this.reloadI18N();
	}

	loadLanguage() {
		let language = navigator.language;

		if(language.indexOf('-') > -1) {
			language = language.split('-')[0];
		}

		// Load Language file
		let file = document.createElement('script');
		file.onload = () => {
			this.LanguageCache = window['strings_' + language];
			this.reloadI18N();
		};
		file.src = 'js/lang/' + language + '.js';

		document.querySelector('html').lang = language;
		(document.getElementsByTagName('head')[0] || document.documentElement).appendChild(file);

		return language;
	}

	reloadI18N() {
		document.querySelectorAll('[data-i18p]').forEach((element) => {
			element.placeholder = this.getI18N(element.dataset.i18p);
		});

		document.querySelectorAll('[data-i18n]').forEach((element) => {
			element.innerHTML = this.getI18N(element.dataset.i18n);
		});
	}

	getI18N(string) {
		if(typeof(this.LanguageCache[string]) !== 'undefined') {
			string = this.LanguageCache[string];
		}

		return string;
	}

	onClick() {
		document.querySelector('.dz-hidden-input').click();
	}

	generateUniqSerial() {
		return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, (c) => {
			return Math.floor(Math.random() * 16).toString(16);
		});
	}

	getRandomProxy(url) {
		let encoded = encodeURIComponent(url);

		return this.Proxies[Math.floor((Math.random() * this.Proxies.length))] + url;
	}

	pushInfo(type, message) {
		this.Toast.hide();

		setTimeout(() => {
			let element = document.querySelector('div.toast');
			element.innerHTML = this.getI18N(message);

			element.classList.forEach((value) => {
				if(value.startsWith('text-bg-')) {
					element.classList.remove(value);
				}
			});

			element.classList.add('text-bg-' + type);

			this.Toast.show();
		}, 500);
	}

	convertClass(name) {
		if(typeof(this.Classes[name]) === 'undefined') {
			return name;
		}

		let data = this.Classes[name];

		if(typeof(data.url) !== 'undefined') {
			return '<a class="ai-class icon-link link-underline-opacity-25 text-truncate" href="' + data.url + '" target="_blank" data-i18n="' + data.name + '">' + this.getI18N(data.name) + '<i class="bi bi-box-arrow-up-right"></i></a>';
		}

		return '<span class="ai-class" data-i18n="' + data.name + '">' + this.getI18N(data.name) + '</span>';
	}

	fillResults(file, data) {
		let container = document.querySelector('tbody');
		this.Data.querySelector('ui-preview').style.backgroundImage = 'url(' + file.src + ')';

		switch(data.status_code) {
			case 200:
				// Empty old Data
				container.innerHTML = '';

				// Fill data
				if(typeof(data.data) !== 'undefined') {
					if(typeof(data.data.classes) !== 'undefined') {
						data.data.classes.sort((a, b) => {
							return b.score - a.score;
						}).forEach((entry) => {
							let row	= document.createElement('tr');

							row.dataset.bsToggle	= 'tooltip';
							row.dataset.bsHtml		= 'true';
							row.dataset.bsTitle		= '<strong data-i18n="Type">' + this.getI18N('Type') + '</strong>: ' + entry.class + '<br /><strong data-i18n="Score">' + this.getI18N('Score') + '</strong>: ' + entry.score;

							const score		= entry.score * 100;
							const red		= Math.round(255 * (score / 100));
							const green 	= Math.round(255 * (1 - score / 100));
							const opacity 	= 0.2 + (0.8 * (score / 100));

							row.innerHTML = '<td><span class="state badge" style="background: rgba(' + red + ', ' + green + ', 0, ' + opacity + ');"></span></td><td>' + this.convertClass(entry.class) + '</td><td><span class="badge text-bg-light">' + score.toFixed(2) + ' %</span></td>';
							container.append(row);

							new bootstrap.Tooltip(row);
						});
					}
				}

				this.Results.show();
			break;
			case 400:
				this.pushInfo('danger', 'Bad request – the request could not be accepted.');
			break;
			case 403:
				this.pushInfo('danger', ' Unauthorized – there is an issue with the API key.');
			break;
			case 404:
				this.pushInfo('danger', 'Not found – the page could not be found.');
			break;
			case 405:
				this.pushInfo('warning', 'You have insufficient balance in your Hive account.');
			break;
			case 429:
				this.pushInfo('warning', 'Too many requests – you’ve made too many requests, please try again in a few minutes.');
			break;
			case 500:
				this.pushInfo('warning', 'Internal service error – we had a problem with our server. Please try again later.');
			break;
			case 503:
				this.pushInfo('warning', 'Service unavailable – we are temporarily offline for maintenance. Please try again later.');
			break;
			case 504:
				this.pushInfo('warning', 'Gateway timeout – we are not able to fulfil your request at this time. Please try again later.');
			break;
		}

	}
}

document.addEventListener('DOMContentLoaded', () => {
	new Main();
});