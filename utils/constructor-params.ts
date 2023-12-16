// constructs a tuple from class constructor params
class C0 {
  constructor(private param?: string) {}
}

type CP1 = ConstructorParameters<typeof C0>;

class Name {
  constructor(name: string) {}
}

interface Param {
  new (option?: string): string;
}

type CP2 = ConstructorParameters<Param>;

type CP3 = ConstructorParameters<RegExpConstructor>;
