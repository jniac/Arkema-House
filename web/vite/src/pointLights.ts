import { Group, PointLight, PointLightHelper } from 'three'

export function pointLights({
  debug = false,
} = {}) {
  const group = new Group()

  const parentRoom = new PointLight('#fff8e5', 15, 0, 2)
  parentRoom.position.set(5, 1.75, -6)
  group.add(parentRoom)

  const kitchen = new PointLight('#fff8e5', 6.66, 0, 2)
  kitchen.position.set(0, 2.25, -6)
  group.add(kitchen)

  const bathroom = new PointLight('#e5fdff', 2.5, 0, 2)
  bathroom.position.set(1.5, 2, -1)
  group.add(bathroom)

  const childRoom = new PointLight('#fff8e5', 10, 0, 2)
  childRoom.position.set(2, 2.5, 3)
  group.add(childRoom)

  const garage = new PointLight('#f2e5ff', 5, 0, 2)
  garage.position.set(5.5, 2.5, 2.5)
  group.add(garage)

  if (debug) {
    group.add(...group.children.map(child => {
      return new PointLightHelper(child as PointLight)
    }))
  }

  return {
    group,
  }
}
