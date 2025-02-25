import { Group, PointLight, PointLightHelper } from 'three'

const pointLightInfo = [
  {
    name: 'parentRoom',
    color: '#fff8e5',
    intensity: 15,
    position: [5, 1.75, -6],
  },
  {
    name: 'kitchen',
    color: '#fff8e5',
    intensity: 6.66,
    position: [0, 2.25, -6],
  },
  {
    name: 'bathroom',
    color: '#e5fdff',
    intensity: 2.5,
    position: [1.5, 2, -1],
  },
  {
    name: 'childRoom',
    color: '#fff8e5',
    intensity: 10,
    position: [2, 2.5, 3],
  },
  {
    name: 'garage',
    color: '#f2e5ff',
    intensity: 5,
    position: [5.5, 2.5, 2.5],
  }
]

export function pointLights({
  debug = false,
} = {}) {
  const group = new Group()

  for (const info of pointLightInfo) {
    const light = new PointLight(info.color, info.intensity)
    light.name = info.name
    light.position.set(...info.position as [number, number, number])
    group.add(light)
  }

  if (debug) {
    group.add(...group.children.map(child => {
      return new PointLightHelper(child as PointLight)
    }))
  }

  return {
    group,
  }
}
