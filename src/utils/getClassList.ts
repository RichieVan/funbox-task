function getClassList(baseClass: string, mods: string[] = []): string {
  return [baseClass]
    .concat(
      mods.map((mod: string) => `${baseClass}_${mod}`),
    )
    .join(' ');
}

export default getClassList;
