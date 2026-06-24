/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Principle {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bgColor: string;
  iconColor: string;
}

export interface DynamicActivity {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ConductItem {
  id: string;
  title: string;
  content: string;
}

export interface MemberCard {
  name: string;
  role: string;
  gridStyle: 'clean' | 'technical' | 'brutalist';
  gridOffset: number;
  joinedDate: string;
}
