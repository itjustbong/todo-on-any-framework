import { writable } from 'svelte/store';

export interface TodoType {
	id: number;
	text: string;
	completed: boolean;
}

// 스토어 생성 관련
// 구독 관련 작업도 다 해줌
export const todoData = writable<TodoType[]>([]);
