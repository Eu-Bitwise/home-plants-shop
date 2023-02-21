import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`You want to buy 1 ${plantName}? good choice🌱✨`)
}

function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='phm-plant-item' onClick={() => handleClick}>
			<span className='phm-plant-item-price'>{price}€</span>
			<img className='phm-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
