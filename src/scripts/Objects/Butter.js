import { Group, BoxGeometry, MeshBasicMaterial,  Mesh } from 'three';

export default (number) => {
  const butters = new Group;
  const geometry = new BoxGeometry(5, 2, 2);
  const material = new MeshBasicMaterial({
    color: 0xffff00,
    wireframe: window.gameState.wireframe,
  });
  const butter = new Mesh(geometry, material);
  const safe_x = 120;
  const safe_z = 80;
  
  butter.name = 'butter';

  for (let index = 0; index < number; index++) {
    butter.position.set(
      Math.random() * safe_x - safe_x/2,
      3,
      Math.random() * safe_z - safe_z/2
    );
    butters.add(butter.clone());
  }

  return butters;
}