/**
 * @author Adrian Preuß
 * @version 1.0.0
*/

class Main {
	HiveServer = 'https://plugin.hivemoderation.com/api/v1/image/ai_detection';
	Magic = '#analyze/';
	Engines = {
		googleimages: 'https://www.google.com/searchbyimage?image_url={0}&client=app',
		googlelens: 'https://lens.google.com/uploadbyurl?url={0}&hl=en&re=df&st=${+ new Date()}&ep=gisbubu',
		yandex: 'https://yandex.com/images/search?url={0}&rpt=imageview',
		tineye: 'https://www.tineye.com/search/?url={0}'
	};
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
		},
		liveportrait: {
			name: 'liveportrait',
			url: 'https://liveportrait.org/de'
		},
		'4o': {
			name: '4o (Chat-GPT)',
			url: 'https://openai.com/index/hello-gpt-4o/'
		},
		recraft: {
			name: 'recraft',
			url: 'https://www.recraft.ai'
		},
		grok: {
			name: 'Grok',
			url: 'https://x.ai'
		},
		wan: {
			name: 'Wan',
			url: 'https://www.wan-ai.org/de'
		},
		leonardo: {
			name: 'Leonardo.Ai',
			url: 'https://leonardo.ai'
		},
		hailuo: {
			name: 'Hailuo AI',
			url: 'https://hailuoai.video/'
		},
		infinity: {
			name: 'Lemon Slice (Infinity AI)',
			url: 'https://lemonslice.com'
		},
		mcnet: {
			name: 'McNet',
			url: 'https://github.com/Audio-WestlakeU/McNet'
		},
		cosmos: {
			name: 'CosmOS (AI Operating System)',
			url: 'https://humane.com/cosmos'
		},
		var: {
			name: 'VAR',
			url: 'https://www.newcivilengineer.com/opinion/ai-on-the-ball-using-artificial-intelligence-in-var-and-engineering-decision-making-28-06-2024/'
		},
		transpixar: {
			name: 'TransPixar AI',
			url: 'https://transpixarai.org'
		},
		luminagpt: {
			name: 'Lumina',
			url: 'https://www.lumina.sh'
		},
		mochi: {
			name: 'Mochi 1',
			url: 'https://mochi1ai.com'
		},
		sana: {
			name: 'Sana Agents',
			url: 'https://sana.ai'
		},
		hunyuan: {
			name: 'Hunyuan Video',
			url: 'https://hunyuanvideoai.com'
		},
		aniportrait: {
			name: 'AniPortrait',
			url: 'https://github.com/Zejun-Yang/AniPortrait'
		},
		pyramidflows: {
			name: 'Pyramid Flow AI',
			url: 'https://pyramid-flow-ai.com'
		},
		dmd2: {
			name: 'DMD2',
			url: 'https://github.com/tianweiy/DMD2'
		},
		omnigen: {
			name: 'OmniGen AI',
			url: 'https://omnigenai.org'
		},
		flashvideo: {
			name: 'FlashVideo',
			url: 'https://github.com/FoundationVision/FlashVideo'
		},
		emu3: {
			name: 'Emu3',
			url: 'https://emu.baai.ac.cn/about'
		},
		switti: {
			name: 'Switti 1024',
			url: 'https://fal.ai/models/switti'
		},
		hallo: {
			name: 'HalloAI',
			url: 'https://www.hallo.ai'
		},
		cogvideos: {
			name: 'CogVideoX AI',
			url: 'https://cogvideox.org'
		},
		makeittalk: {
			name: 'MakeItTalk',
			url: 'https://github.com/yzhou359/MakeItTalk'
		},
		janus: {
			name: 'JanusAI',
			url: 'https://janusai.pro'
		},
		sadtalker: {
			name: 'SadTalker',
			url: 'https://sadtalker.github.io'
		}
	};
	Results = null;
	Toast = null;
	Data = null;
	Upload = null;
	Proxies = [
		'https://proxy.hovida.de/?',
		'https://proxy.mein-chatserver.de/?'
	];

	constructor() {
		this.Data		= document.querySelector('div#results');
		this.Toast		= new bootstrap.Toast(document.querySelector('div.toast'));
		this.Results		= new bootstrap.Modal(this.Data);
		this.Upload		= new Dropzone(document.querySelector('ui-drag'), {
			url:		this.getRandomProxy(this.HiveServer),
			paramName:	'media',
			params:		{
				'request_id': this.generateUniqSerial()
			},
			disablePreviews:	true,
			defaultHeaders:		false
		});

		this.Upload.on('processing', () => {
			this.setPermalink(null);
			document.body.dataset.loading = 'true';
		});

		this.Upload.on('success', (file, response, e) => {
			this.setPermalink(null);
			let image = new Image();
			image.src = file.dataURL;

			this.fillResults(image, response);
		});

		document.querySelector('ui-input input[type="text"]').addEventListener('keyup', this.onType.bind(this));
		document.querySelector('ui-input button').addEventListener('click', this.onSearch.bind(this));
		document.querySelector('ui-drag').addEventListener('click', this.onClick);
		document.querySelector('button#copy').addEventListener('click', this.onCopy.bind(this));
		document.querySelector('[data-icon="all"]').addEventListener('click', this.onAllSearchEngines.bind(this));

		if(window.location.hash) {
			let hash 	= window.location.hash;

			if(hash.substring(0, this.Magic.length) === this.Magic) {
				let url 		= hash.replace(this.Magic, '').replace('\_', '_');
				let input		= document.querySelector('ui-input input[type="text"]');
				input.value		= url;
				this.searchByURL(input);
				window.location.hash = '';
			}
		}
	}

	format(content) {
		if (arguments.length) {
			for (let position = 0; position < arguments.length; ++position) {
				content = content.replace(new RegExp('\\{' + position + '\\}', 'gi'), arguments[position + 1]);
			}
		}

		return content;
	}

	onCopy(event) {
		let target = event.target.parentNode.parentNode.querySelector('input[type="text"]');
		target.select();
		target.setSelectionRange(0, 99999);

		try {
			navigator.clipboard.writeText(target.value);
			this.pushInfo('success', 'Copied successfully to the clipboard.', target.value);
		} catch(e) {
			try {
				var range = document.createRange();
				range.selectNode(target);
				window.getSelection().removeAllRanges();
				window.getSelection().addRange(range);
				document.execCommand("copy");
				window.getSelection().removeAllRanges();
				this.pushInfo('success', 'Copied successfully to the clipboard.', target.value);
			} catch(e1) {
				this.pushInfo('danger', 'Error when copying to the clipboard.', target.value);
			}
		}
	}

	onClick(event) {
		event.preventDefault();
		document.querySelector('.dz-hidden-input').click();
	}

	onType(event) {
		if(event.keyCode === 13) {
			this.searchByURL(event.target);
		}
	}

	onSearch(event) {
		this.searchByURL(event.target.parentNode.querySelector('input[type="text"]'));
	}

	searchByURL(element) {
		this.setPermalink(null);

		let url					= element.value;
		element.value					= '';
		document.body.dataset.loading	= 'true';

		/* Explicitly change to Original File for Community Knuddels.de */
		if(new RegExp('([a-zA-Z\\d.-]+\\.knuddels\\.[A-Za-z]{2,4})').test(url)) {
			url = url.replace(/pro0(sq|msq|lsq|s|m|l|vl)0p/gm, 'pro0vl0p');
		}

		this.setPermalink(url);

		/* Get the Image */
		new Ajax(this.getRandomProxy(url)).additional(function () {
			this.responseType = 'arraybuffer';
		}).get().then((response) => {
			const data	= new FormData();
			const file 		= new File([response.response], 'temp_' + Date.now() + '.jpg', {
				type: 'image/jpeg'
			});

			data.append('media',		file);
			data.append('request_id',	this.generateUniqSerial());

			new Ajax(this.getRandomProxy(this.HiveServer)).post(data).then((response) => {
				try {
					let image	= new Image();
					image.src					= this.getRandomProxy(url);
					this.fillResults(image, JSON.parse(response.response));
				} catch (e) {
					this.pushInfo('danger', 'Malformed Output.', e.message);
				}
			}).catch((error, ref) => {
				this.pushInfo('danger', 'Request Error.', error.message);
			});
		});
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

	pushInfo(type, message, additional) {
		this.Toast.hide();

		setTimeout(() => {
			let element = document.querySelector('div.toast');
			let text = window.Language.getI18N(message);

			if(typeof(additional) !== 'undefined') {
				text += '<br /><br /><strong>' + window.Language.getI18N('Additional Information') + ':</strong><br />' + window.Language.getI18N(additional);
			}

			element.innerHTML = text;

			element.classList.forEach((value) => {
				if(value.startsWith('text-bg-')) {
					element.classList.remove(value);
				}
			});

			element.classList.add('text-bg-' + type);

			this.Toast.show();
		}, 500);
	}

	setPermalink(image) {
		let element = document.querySelector('input#permalink');

		if(image === null) {
			document.querySelector('.modal-footer .input-group').classList.add('hide');
			document.querySelector('.modal-footer .dropup').classList.add('hide');
			element.value = '';
			return;
		}

		document.querySelector('.modal-footer .input-group').classList.remove('hide');
		document.querySelector('.modal-footer .dropup').classList.remove('hide');

		Object.keys(this.Engines).forEach((name) => {
			document.querySelector('[data-icon="' + name + '"]').setAttribute('href', this.format(this.Engines[name], encodeURIComponent(image)));
		});

		document.querySelector('[data-icon="all"]').dataset.source = image;

		element.value = window.location.protocol + '//' + window.location.href.replace(/(http|https):\/\//, '').replace(window.location.hash, '').replaceAll('//', '/') + '\\' + this.Magic + image.replace('_', '\_');
	}

	onAllSearchEngines(event) {
		let image = event.target.dataset.source;

		Object.keys(this.Engines).forEach((name, index) => {
			setTimeout(() => {
				window.open(this.format(this.Engines[name], encodeURIComponent(image)));
			}, index * 10);
		});
	}

	convertClass(name) {
		if(typeof(this.Classes[name]) === 'undefined') {
			console.warn('[Warn] Class not found:', name);
			return name;
		}

		let data = this.Classes[name];

		if(typeof(data.url) !== 'undefined') {
			return '<a class="ai-class icon-link link-underline-opacity-25 text-truncate" href="' + data.url + '" target="_blank" data-i18n="' + data.name + '"><span data-i18n="' + data.name + '">' + window.Language.getI18N(data.name) + '</span><i class="bi bi-box-arrow-up-right"></i></a>';
		} else {
			console.warn('[Warn] Class-URL not found:', name);
		}

		return '<span class="ai-class" data-i18n="' + data.name + '">' + window.Language.getI18N(data.name) + '</span>';
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
					let highest = {
						name: null,
						score: 0
					};

					if(typeof(data.data.classes) !== 'undefined') {
						data.data.classes.sort((a, b) => {
							return b.score - a.score;
						}).forEach((entry) => {
							if(entry.score > highest.score) {
								highest.name = entry.class;

								if([
									'not_ai_generated',
									'none'
								].indexOf(entry.class) === -1) {
									highest.score = entry.score;
								}
							}

							let row	= document.createElement('tr');

							row.dataset.bsToggle	= 'tooltip';
							row.dataset.bsTitle		= '<strong data-i18n="Type">' + window.Language.getI18N('Type') + '</strong>: ' + entry.class + '<br /><strong data-i18n="Score">' + window.Language.getI18N('Score') + '</strong>: ' + entry.score;

							const score 	= Math.max(0, Math.min(100, entry.score * 100));

							row.innerHTML = '<td><span class="state badge" style="background: rgb(' + Math.round(255 * (score / 100)) + ', ' + Math.round(255 * (1 - score / 100)) + ', 0);"></span></td><td>' + this.convertClass(entry.class) + '</td><td><span class="badge text-bg-light">' + score.toFixed(2) + ' %</span></td>';
							container.append(row);

							new bootstrap.Tooltip(row, {
								html:		true,
								container: 	'body'
							});
						});

						let label 		= '';
						const score 	= Math.max(0, Math.min(100, highest.score * 100));
						const color 		= 'rgb(' + Math.round(255 * (score / 100)) + ', ' + Math.round(255 * (1 - score / 100)) + ', 0)';

						if(highest.score * 100 < 1.5) {
							label = window.Language.getI18N('Not AI Generated');
						} else if(highest.score * 100 < 10) {
							label = window.Language.getI18N('Edited');
						} else {
							label = window.Language.getI18N('AI Generated');
						}

						setTimeout(() => {
							document.querySelector('#wheel #outer').setAttribute('stroke-dashoffset', (1 - highest.score) * 630);
						}, 10);

						document.querySelector('ui-preview ui-result h1').innerHTML = ((highest.score * 100).toFixed(1)) + ' %';
						document.querySelector('ui-preview ui-result h1').style.color = color;
						document.querySelector('ui-preview ui-result h2').innerHTML = label;
						document.querySelector('ui-preview ui-result h2').style.color = color;
						document.querySelector('#wheel #outer').style.stroke = color;
						document.querySelector('ui-preview ui-result h3').innerHTML = highest.name;
					}
				}

				this.Results.show();
			break;
			case 400:
				this.pushInfo('danger', 'Bad request – the request could not be accepted.', data.message);
			break;
			case 403:
				this.pushInfo('danger', ' Unauthorized – there is an issue with the API key.', data.message);
			break;
			case 404:
				this.pushInfo('danger', 'Not found – the page could not be found.', data.message);
			break;
			case 405:
				this.pushInfo('warning', 'You have insufficient balance in your Hive account.', data.message);
			break;
			case 429:
				this.pushInfo('warning', 'Too many requests – you’ve made too many requests, please try again in a few minutes.', data.message);
			break;
			case 500:
				this.pushInfo('warning', 'Internal service error – we had a problem with our server. Please try again later.', data.message);
			break;
			case 503:
				this.pushInfo('warning', 'Service unavailable – we are temporarily offline for maintenance. Please try again later.', data.message);
			break;
			case 504:
				this.pushInfo('warning', 'Gateway timeout – we are not able to fulfil your request at this time. Please try again later.', data.message);
			break;
		}

		document.body.dataset.loading = 'false';
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new Main();
});
