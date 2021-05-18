// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactor = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate(){
        
        let dnaBaseIndex = Math.floor(Math.random() * dna.length)
        let newBase = '';
        do{
          newBase = returnRandBase();
        }while(this.dna[dnaBaseIndex] === newBase)
        this.dna[dnaBaseIndex] = newBase;
        return this.dna;
    },compareDNA(object){
      const selfDna = this.dna;
      const foreignDna = object.dna;
      let similarity = 0;

      console.log(selfDna)
      console.log(foreignDna)
      for(let i =0;i<selfDna.length;i++){
          if(selfDna[i] === foreignDna[i]){
            similarity++;
          }
      }

      similarity /= 15;
      similarity *= 100;
      console.log(`Specimen #1 and specimen #2 have ${similarity.toFixed()}% DNA in common`)
      
    }
  }
}


