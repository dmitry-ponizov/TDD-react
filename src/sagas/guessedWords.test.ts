import { take, call, put, apply, select } from 'redux-saga/effects'

import { GUESS_WORD_REQUEST, guessWordAction, guessWordSuccessAction, guessWordFailureAction } from "../actions";  
import { guessWordSaga } from './guessedWords'
import { getSecretWord } from '../selectors/guessedWordSelectors';
import { getLetterMatchCount } from '../helpers';

describe('the guessed word saga', () => {
    test('add guessed word', () => {
        const guessedWord = 'train'
        const gen = guessWordSaga({ type: GUESS_WORD_REQUEST, guessedWord })  
        expect(gen.next().value).toEqual(select(getSecretWord));
        expect(gen.next().value).toEqual(put(guessWordAction([{ guessedWord, letterMatchCount: 3 }])));
        expect(gen.next().done).toBeTruthy();
    })
    test('word is matched', () => {
        const guessedWord = 'party'
        const secretWord = 'party'
        const gen = guessWordSaga({ type: GUESS_WORD_REQUEST, guessedWord })
        expect(gen.next().value).toEqual(select(getSecretWord));
        expect(gen.next().value).toEqual(put(guessWordAction([{ guessedWord, letterMatchCount: 3 }])));
        console.log(gen.next(true))
    })

    test('error message was set', () => {

    })
})