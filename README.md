# Hair Day 💇

Sistema de agendamento de cortes de cabelo desenvolvido com React, TypeScript e Tailwind CSS. Uma aplicação moderna e responsiva para gerenciar horários de atendimento.

## 📋 Sobre o Projeto

O Hair Day é uma aplicação web que permite agendar e gerenciar cortes de cabelo de forma simples e intuitiva. A aplicação oferece uma interface limpa e moderna, com suporte completo a dispositivos móveis e desktop.

## ✨ Funcionalidades

- 📅 **Seleção de Data**: Escolha a data desejada através de um calendário interativo
- ⏰ **Seleção de Horário**: Escolha entre horários disponíveis organizados por períodos (Manhã, Tarde, Noite)
- 👤 **Cadastro de Cliente**: Informe o nome do cliente para o agendamento
- 📊 **Visualização de Agenda**: Consulte todos os agendamentos organizados por data e período
- 🗑️ **Exclusão de Agendamentos**: Remova agendamentos facilmente
- 💾 **Persistência Local**: Os dados são salvos automaticamente no localStorage do navegador
- 📱 **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela

## 🛠️ Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server extremamente rápido
- **Tailwind CSS 4** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e não estilizados
- **React Day Picker** - Componente de calendário
- **date-fns** - Biblioteca para manipulação de datas
- **Lucide React** - Ícones modernos e leves
- **Class Variance Authority** - Gerenciamento de variantes de classes

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (gerenciador de pacotes)

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd hairday
```

2. Instale as dependências:
```bash
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Cria a build de produção
- `pnpm preview` - Visualiza a build de produção localmente
- `pnpm lint` - Executa o linter para verificar problemas no código

## 📁 Estrutura do Projeto

```
hairday/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── schedules/          # Componentes da seção de agendamentos
│   │   │   │   ├── date-picker-schedule/
│   │   │   │   └── schedule-tables/
│   │   │   └── sidebar/            # Componentes da sidebar de agendamento
│   │   │       ├── client-section/
│   │   │       ├── date-picker/
│   │   │       └── hour-range/
│   │   └── ui/                     # Componentes de UI reutilizáveis
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── popover.tsx
│   ├── contexts/
│   │   └── ScheduleContext.tsx     # Context API para gerenciamento de estado
│   ├── lib/
│   │   └── utils.ts                # Funções utilitárias
│   ├── styles/
│   │   ├── assets/                 # Assets (logo, favicon)
│   │   └── index.css               # Estilos globais e tema Tailwind
│   ├── types/
│   │   └── schedule.ts             # Definições de tipos TypeScript
│   ├── App.tsx                     # Componente principal
│   └── main.tsx                    # Ponto de entrada da aplicação
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🎨 Design

A aplicação utiliza um tema escuro com cores personalizadas:
- **Background**: Tons de cinza escuro (#050505 a #232225)
- **Destaque**: Amarelo dourado (#b8952e) para elementos interativos
- **Tipografia**: Catamaran (Google Fonts)

## 📝 Funcionalidades Técnicas

- **Validação de Formulário**: Validação em tempo real dos campos obrigatórios
- **Prevenção de Conflitos**: Sistema impede agendamentos duplicados no mesmo horário
- **Organização por Períodos**: Agendamentos agrupados automaticamente por Manhã (09h-12h), Tarde (13h-18h) e Noite (19h-21h)
- **Filtro por Data**: Visualize agendamentos de uma data específica
- **Persistência de Dados**: Todos os agendamentos são salvos automaticamente no localStorage
