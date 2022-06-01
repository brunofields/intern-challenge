import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-challenge',
  templateUrl: './first-challenge.component.html',
  styleUrls: ['./first-challenge.component.scss'],
})
export class FirstChallengeComponent implements OnInit {
  challengeResult!: string;

  firstChallengeForm = new FormGroup({
    firstString: new FormControl('', Validators.required),
    secondString: new FormControl('', Validators.required),
    thirdString: new FormControl('', Validators.required),
  });

  get isFormValid(): boolean {
    return this.firstChallengeForm.valid;
  }

  constructor() {}

  ngOnInit(): void {}

  submit() {

    // resetando o resultado sempre que realizo uma nova consulta
    this.challengeResult = '';

    // pegando os valores inseridos nos inputs e colocando dentro de um array
    let wordsArray = [
      this.firstChallengeForm.get('firstString')?.value,
      this.firstChallengeForm.get('secondString')?.value,
      this.firstChallengeForm.get('thirdString')?.value,
    ];

    // dando um sort() no array, pra colocar na primeira posição a menor palavra, ela delimitará o loop
    wordsArray.sort();

    // colocando em variáveis com nomes melhores, só pra um entendimento mais claro
    const arrayLength = wordsArray.length;
    const firstWordLength = wordsArray[0].length;

    // inicialização da variavel que vai pegar qual a letra que está sendo comparada
    let currentLetter = '';

    // percorrendo só até o limite da menor palavra, pra não percorrermos mais que o necessário
    for (let letterIndex = 0; letterIndex < firstWordLength; letterIndex++) {

    // pegando a letra correspondente dessa iteração
      currentLetter = wordsArray[0][letterIndex];

      // percorrendo dentre o array todo, validando se a letra sendo comparada existe em todos eles
      for (let arrayIndex = 0; arrayIndex < arrayLength; arrayIndex++) {

        // se não temos o mesmo prefixo em todos os arrays, retorna
        if (wordsArray[arrayIndex][letterIndex] !== currentLetter) {
          return;
        }
      }
      // se temos o mesmo prefixo em todos os arrays, ja salvo a letra correspondente no resultado e exibo na tela :)
      this.challengeResult += currentLetter;
    } 
  }
}
