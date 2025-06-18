--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18 (Ubuntu 14.18-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 17.5 (Ubuntu 17.5-1.pgdg22.04+1)

-- Started on 2025-06-05 22:56:12 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 16439)
-- Name: laudo; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA laudo;


ALTER SCHEMA laudo OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16441)
-- Name: cliente; Type: TABLE; Schema: laudo; Owner: postgres
--

CREATE TABLE laudo.cliente (
    idcliente integer NOT NULL,
    clientenome character varying(50) NOT NULL,
    clientestatus integer DEFAULT 0
);


ALTER TABLE laudo.cliente OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16445)
-- Name: cliente_idcliente_seq; Type: SEQUENCE; Schema: laudo; Owner: postgres
--

CREATE SEQUENCE laudo.cliente_idcliente_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE laudo.cliente_idcliente_seq OWNER TO postgres;

--
-- TOC entry 3416 (class 0 OID 0)
-- Dependencies: 211
-- Name: cliente_idcliente_seq; Type: SEQUENCE OWNED BY; Schema: laudo; Owner: postgres
--

ALTER SEQUENCE laudo.cliente_idcliente_seq OWNED BY laudo.cliente.idcliente;


--
-- TOC entry 212 (class 1259 OID 16446)
-- Name: endereco; Type: TABLE; Schema: laudo; Owner: postgres
--

CREATE TABLE laudo.endereco (
    idendereco integer NOT NULL,
    enderecoendereco character varying(150) NOT NULL,
    enderecocep character(8) NOT NULL,
    enderecolat numeric,
    enderecolon numeric,
    enderecostatus integer DEFAULT 0,
    idsede integer NOT NULL
);


ALTER TABLE laudo.endereco OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16452)
-- Name: endereco_idendereco_seq; Type: SEQUENCE; Schema: laudo; Owner: postgres
--

CREATE SEQUENCE laudo.endereco_idendereco_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE laudo.endereco_idendereco_seq OWNER TO postgres;

--
-- TOC entry 3417 (class 0 OID 0)
-- Dependencies: 213
-- Name: endereco_idendereco_seq; Type: SEQUENCE OWNED BY; Schema: laudo; Owner: postgres
--

ALTER SEQUENCE laudo.endereco_idendereco_seq OWNED BY laudo.endereco.idendereco;


--
-- TOC entry 214 (class 1259 OID 16453)
-- Name: equipamento; Type: TABLE; Schema: laudo; Owner: postgres
--

CREATE TABLE laudo.equipamento (
    idequipamento integer NOT NULL,
    equipamentoserie character varying(30),
    equipamentomodelo character varying(50),
    equipamentomac character(12),
    equipamentoipv4 character varying(15),
    equipamentoipv6 character varying(45),
    equipamentoanydesk character varying(10),
    equipamentodw character varying(10),
    equipamentoalugado boolean DEFAULT true,
    idsede integer NOT NULL,
    idtipoeq integer NOT NULL
);


ALTER TABLE laudo.equipamento OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16457)
-- Name: equipamento_idequipamento_seq; Type: SEQUENCE; Schema: laudo; Owner: postgres
--

CREATE SEQUENCE laudo.equipamento_idequipamento_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE laudo.equipamento_idequipamento_seq OWNER TO postgres;

--
-- TOC entry 3418 (class 0 OID 0)
-- Dependencies: 215
-- Name: equipamento_idequipamento_seq; Type: SEQUENCE OWNED BY; Schema: laudo; Owner: postgres
--

ALTER SEQUENCE laudo.equipamento_idequipamento_seq OWNED BY laudo.equipamento.idequipamento;


--
-- TOC entry 216 (class 1259 OID 16458)
-- Name: laudo; Type: TABLE; Schema: laudo; Owner: postgres
--

CREATE TABLE laudo.laudo (
    idlaudo integer NOT NULL,
    laudodescricao text NOT NULL,
    laudohtmlmd text NOT NULL,
    laudodatainclusao time without time zone DEFAULT now() NOT NULL,
    laudofechamento time without time zone,
    laudostatus integer DEFAULT 0 NOT NULL,
    idtipolaudo integer NOT NULL,
    idtipoinstalacao integer NOT NULL,
    laudoosclickup character varying(10),
    idusuario integer
);


ALTER TABLE laudo.laudo OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16465)
-- Name: laudo_idlaudo_seq; Type: SEQUENCE; Schema: laudo; Owner: postgres
--

CREATE SEQUENCE laudo.laudo_idlaudo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE laudo.laudo_idlaudo_seq OWNER TO postgres;

--
-- TOC entry 3419 (class 0 OID 0)
-- Dependencies: 217
-- Name: laudo_idlaudo_seq; Type: SEQUENCE OWNED BY; Schema: laudo; Owner: postgres
--

ALTER SEQUENCE laudo.laudo_idlaudo_seq OWNED BY laudo.laudo.idlaudo;


--
-- TOC entry 218 (class 1259 OID 16466)
-- Name: sede; Type: TABLE; Schema: laudo; Owner: postgres
--

CREATE TABLE laudo.sede (
    idsede integer NOT NULL,
    sedenome character varying(50) NOT NULL,
    sedestatus integer DEFAULT 0 NOT NULL,
    idcliente integer NOT NULL,
    sededtinclusao date DEFAULT now()
);


ALTER TABLE laudo.sede OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16471)
-- Name: sede_idsede_seq; Type: SEQUENCE; Schema: laudo; Owner: postgres
--

CREATE SEQUENCE laudo.sede_idsede_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE laudo.sede_idsede_seq OWNER TO postgres;

--
-- TOC entry 3420 (class 0 OID 0)
-- Dependencies: 219
-- Name: sede_idsede_seq; Type: SEQUENCE OWNED BY; Schema: laudo; Owner: postgres
--

ALTER SEQUENCE laudo.sede_idsede_seq OWNED BY laudo.sede.idsede;


--
-- TOC entry 220 (class 1259 OID 16472)
-- Name: tipoeq; Type: TABLE; Schema: laudo; Owner: postgres
--

CREATE TABLE laudo.tipoeq (
    idtipoeq integer NOT NULL,
    tipoeqnome character varying(50) NOT NULL
);


ALTER TABLE laudo.tipoeq OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16475)
-- Name: tipoeq_idtipoeq_seq; Type: SEQUENCE; Schema: laudo; Owner: postgres
--

CREATE SEQUENCE laudo.tipoeq_idtipoeq_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE laudo.tipoeq_idtipoeq_seq OWNER TO postgres;

--
-- TOC entry 3421 (class 0 OID 0)
-- Dependencies: 221
-- Name: tipoeq_idtipoeq_seq; Type: SEQUENCE OWNED BY; Schema: laudo; Owner: postgres
--

ALTER SEQUENCE laudo.tipoeq_idtipoeq_seq OWNED BY laudo.tipoeq.idtipoeq;


--
-- TOC entry 222 (class 1259 OID 16476)
-- Name: tipoinstalacao; Type: TABLE; Schema: laudo; Owner: postgres
--

CREATE TABLE laudo.tipoinstalacao (
    idtipoinstalacao integer NOT NULL,
    tipoinstalacaonome character varying(50) NOT NULL
);


ALTER TABLE laudo.tipoinstalacao OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16479)
-- Name: tipoinstalacao_idtipoinstalacao_seq; Type: SEQUENCE; Schema: laudo; Owner: postgres
--

CREATE SEQUENCE laudo.tipoinstalacao_idtipoinstalacao_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE laudo.tipoinstalacao_idtipoinstalacao_seq OWNER TO postgres;

--
-- TOC entry 3422 (class 0 OID 0)
-- Dependencies: 223
-- Name: tipoinstalacao_idtipoinstalacao_seq; Type: SEQUENCE OWNED BY; Schema: laudo; Owner: postgres
--

ALTER SEQUENCE laudo.tipoinstalacao_idtipoinstalacao_seq OWNED BY laudo.tipoinstalacao.idtipoinstalacao;


--
-- TOC entry 224 (class 1259 OID 16480)
-- Name: tipolaudo; Type: TABLE; Schema: laudo; Owner: postgres
--

CREATE TABLE laudo.tipolaudo (
    idtipolaudo integer NOT NULL,
    tipolaudonome character varying(50) NOT NULL,
    tipolaudotemplate text
);


ALTER TABLE laudo.tipolaudo OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16485)
-- Name: tipolaudo_idtipolaudo_seq; Type: SEQUENCE; Schema: laudo; Owner: postgres
--

CREATE SEQUENCE laudo.tipolaudo_idtipolaudo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE laudo.tipolaudo_idtipolaudo_seq OWNER TO postgres;

--
-- TOC entry 3423 (class 0 OID 0)
-- Dependencies: 225
-- Name: tipolaudo_idtipolaudo_seq; Type: SEQUENCE OWNED BY; Schema: laudo; Owner: postgres
--

ALTER SEQUENCE laudo.tipolaudo_idtipolaudo_seq OWNED BY laudo.tipolaudo.idtipolaudo;


--
-- TOC entry 227 (class 1259 OID 16541)
-- Name: usuario; Type: TABLE; Schema: laudo; Owner: postgres
--

CREATE TABLE laudo.usuario (
    idusuario integer NOT NULL,
    usuarioemail character varying(100) NOT NULL,
    usuariosenha character varying(100) NOT NULL,
    usuariostatus integer DEFAULT 0 NOT NULL
);


ALTER TABLE laudo.usuario OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16540)
-- Name: usuario_idusuario_seq; Type: SEQUENCE; Schema: laudo; Owner: postgres
--

CREATE SEQUENCE laudo.usuario_idusuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE laudo.usuario_idusuario_seq OWNER TO postgres;

--
-- TOC entry 3424 (class 0 OID 0)
-- Dependencies: 226
-- Name: usuario_idusuario_seq; Type: SEQUENCE OWNED BY; Schema: laudo; Owner: postgres
--

ALTER SEQUENCE laudo.usuario_idusuario_seq OWNED BY laudo.usuario.idusuario;


--
-- TOC entry 3212 (class 2604 OID 16486)
-- Name: cliente idcliente; Type: DEFAULT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.cliente ALTER COLUMN idcliente SET DEFAULT nextval('laudo.cliente_idcliente_seq'::regclass);


--
-- TOC entry 3214 (class 2604 OID 16487)
-- Name: endereco idendereco; Type: DEFAULT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.endereco ALTER COLUMN idendereco SET DEFAULT nextval('laudo.endereco_idendereco_seq'::regclass);


--
-- TOC entry 3216 (class 2604 OID 16488)
-- Name: equipamento idequipamento; Type: DEFAULT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.equipamento ALTER COLUMN idequipamento SET DEFAULT nextval('laudo.equipamento_idequipamento_seq'::regclass);


--
-- TOC entry 3218 (class 2604 OID 16489)
-- Name: laudo idlaudo; Type: DEFAULT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.laudo ALTER COLUMN idlaudo SET DEFAULT nextval('laudo.laudo_idlaudo_seq'::regclass);


--
-- TOC entry 3221 (class 2604 OID 16490)
-- Name: sede idsede; Type: DEFAULT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.sede ALTER COLUMN idsede SET DEFAULT nextval('laudo.sede_idsede_seq'::regclass);


--
-- TOC entry 3224 (class 2604 OID 16491)
-- Name: tipoeq idtipoeq; Type: DEFAULT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.tipoeq ALTER COLUMN idtipoeq SET DEFAULT nextval('laudo.tipoeq_idtipoeq_seq'::regclass);


--
-- TOC entry 3225 (class 2604 OID 16492)
-- Name: tipoinstalacao idtipoinstalacao; Type: DEFAULT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.tipoinstalacao ALTER COLUMN idtipoinstalacao SET DEFAULT nextval('laudo.tipoinstalacao_idtipoinstalacao_seq'::regclass);


--
-- TOC entry 3226 (class 2604 OID 16493)
-- Name: tipolaudo idtipolaudo; Type: DEFAULT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.tipolaudo ALTER COLUMN idtipolaudo SET DEFAULT nextval('laudo.tipolaudo_idtipolaudo_seq'::regclass);


--
-- TOC entry 3227 (class 2604 OID 16544)
-- Name: usuario idusuario; Type: DEFAULT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.usuario ALTER COLUMN idusuario SET DEFAULT nextval('laudo.usuario_idusuario_seq'::regclass);


--
-- TOC entry 3393 (class 0 OID 16441)
-- Dependencies: 210
-- Data for Name: cliente; Type: TABLE DATA; Schema: laudo; Owner: postgres
--

COPY laudo.cliente (idcliente, clientenome, clientestatus) FROM stdin;
\.


--
-- TOC entry 3395 (class 0 OID 16446)
-- Dependencies: 212
-- Data for Name: endereco; Type: TABLE DATA; Schema: laudo; Owner: postgres
--

COPY laudo.endereco (idendereco, enderecoendereco, enderecocep, enderecolat, enderecolon, enderecostatus, idsede) FROM stdin;
\.


--
-- TOC entry 3397 (class 0 OID 16453)
-- Dependencies: 214
-- Data for Name: equipamento; Type: TABLE DATA; Schema: laudo; Owner: postgres
--

COPY laudo.equipamento (idequipamento, equipamentoserie, equipamentomodelo, equipamentomac, equipamentoipv4, equipamentoipv6, equipamentoanydesk, equipamentodw, equipamentoalugado, idsede, idtipoeq) FROM stdin;
\.


--
-- TOC entry 3399 (class 0 OID 16458)
-- Dependencies: 216
-- Data for Name: laudo; Type: TABLE DATA; Schema: laudo; Owner: postgres
--

COPY laudo.laudo (idlaudo, laudodescricao, laudohtmlmd, laudodatainclusao, laudofechamento, laudostatus, idtipolaudo, idtipoinstalacao, laudoosclickup, idusuario) FROM stdin;
\.


--
-- TOC entry 3401 (class 0 OID 16466)
-- Dependencies: 218
-- Data for Name: sede; Type: TABLE DATA; Schema: laudo; Owner: postgres
--

COPY laudo.sede (idsede, sedenome, sedestatus, idcliente, sededtinclusao) FROM stdin;
\.


--
-- TOC entry 3403 (class 0 OID 16472)
-- Dependencies: 220
-- Data for Name: tipoeq; Type: TABLE DATA; Schema: laudo; Owner: postgres
--

COPY laudo.tipoeq (idtipoeq, tipoeqnome) FROM stdin;
\.


--
-- TOC entry 3405 (class 0 OID 16476)
-- Dependencies: 222
-- Data for Name: tipoinstalacao; Type: TABLE DATA; Schema: laudo; Owner: postgres
--

COPY laudo.tipoinstalacao (idtipoinstalacao, tipoinstalacaonome) FROM stdin;
\.


--
-- TOC entry 3407 (class 0 OID 16480)
-- Dependencies: 224
-- Data for Name: tipolaudo; Type: TABLE DATA; Schema: laudo; Owner: postgres
--

COPY laudo.tipolaudo (idtipolaudo, tipolaudonome, tipolaudotemplate) FROM stdin;
\.


--
-- TOC entry 3410 (class 0 OID 16541)
-- Dependencies: 227
-- Data for Name: usuario; Type: TABLE DATA; Schema: laudo; Owner: postgres
--

COPY laudo.usuario (idusuario, usuarioemail, usuariosenha, usuariostatus) FROM stdin;
\.


--
-- TOC entry 3425 (class 0 OID 0)
-- Dependencies: 211
-- Name: cliente_idcliente_seq; Type: SEQUENCE SET; Schema: laudo; Owner: postgres
--

SELECT pg_catalog.setval('laudo.cliente_idcliente_seq', 1, false);


--
-- TOC entry 3426 (class 0 OID 0)
-- Dependencies: 213
-- Name: endereco_idendereco_seq; Type: SEQUENCE SET; Schema: laudo; Owner: postgres
--

SELECT pg_catalog.setval('laudo.endereco_idendereco_seq', 1, false);


--
-- TOC entry 3427 (class 0 OID 0)
-- Dependencies: 215
-- Name: equipamento_idequipamento_seq; Type: SEQUENCE SET; Schema: laudo; Owner: postgres
--

SELECT pg_catalog.setval('laudo.equipamento_idequipamento_seq', 1, false);


--
-- TOC entry 3428 (class 0 OID 0)
-- Dependencies: 217
-- Name: laudo_idlaudo_seq; Type: SEQUENCE SET; Schema: laudo; Owner: postgres
--

SELECT pg_catalog.setval('laudo.laudo_idlaudo_seq', 1, false);


--
-- TOC entry 3429 (class 0 OID 0)
-- Dependencies: 219
-- Name: sede_idsede_seq; Type: SEQUENCE SET; Schema: laudo; Owner: postgres
--

SELECT pg_catalog.setval('laudo.sede_idsede_seq', 1, false);


--
-- TOC entry 3430 (class 0 OID 0)
-- Dependencies: 221
-- Name: tipoeq_idtipoeq_seq; Type: SEQUENCE SET; Schema: laudo; Owner: postgres
--

SELECT pg_catalog.setval('laudo.tipoeq_idtipoeq_seq', 1, false);


--
-- TOC entry 3431 (class 0 OID 0)
-- Dependencies: 223
-- Name: tipoinstalacao_idtipoinstalacao_seq; Type: SEQUENCE SET; Schema: laudo; Owner: postgres
--

SELECT pg_catalog.setval('laudo.tipoinstalacao_idtipoinstalacao_seq', 1, false);


--
-- TOC entry 3432 (class 0 OID 0)
-- Dependencies: 225
-- Name: tipolaudo_idtipolaudo_seq; Type: SEQUENCE SET; Schema: laudo; Owner: postgres
--

SELECT pg_catalog.setval('laudo.tipolaudo_idtipolaudo_seq', 1, false);


--
-- TOC entry 3433 (class 0 OID 0)
-- Dependencies: 226
-- Name: usuario_idusuario_seq; Type: SEQUENCE SET; Schema: laudo; Owner: postgres
--

SELECT pg_catalog.setval('laudo.usuario_idusuario_seq', 1, false);


--
-- TOC entry 3230 (class 2606 OID 16495)
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (idcliente);


--
-- TOC entry 3232 (class 2606 OID 16497)
-- Name: endereco endereco_pkey; Type: CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.endereco
    ADD CONSTRAINT endereco_pkey PRIMARY KEY (idendereco);


--
-- TOC entry 3234 (class 2606 OID 16499)
-- Name: equipamento equipamento_pkey; Type: CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.equipamento
    ADD CONSTRAINT equipamento_pkey PRIMARY KEY (idequipamento);


--
-- TOC entry 3236 (class 2606 OID 16501)
-- Name: laudo laudo_pkey; Type: CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.laudo
    ADD CONSTRAINT laudo_pkey PRIMARY KEY (idlaudo);


--
-- TOC entry 3238 (class 2606 OID 16503)
-- Name: sede sede_pkey; Type: CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.sede
    ADD CONSTRAINT sede_pkey PRIMARY KEY (idsede);


--
-- TOC entry 3240 (class 2606 OID 16505)
-- Name: tipoeq tipoeq_pkey; Type: CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.tipoeq
    ADD CONSTRAINT tipoeq_pkey PRIMARY KEY (idtipoeq);


--
-- TOC entry 3242 (class 2606 OID 16507)
-- Name: tipoinstalacao tipoinstalacao_pkey; Type: CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.tipoinstalacao
    ADD CONSTRAINT tipoinstalacao_pkey PRIMARY KEY (idtipoinstalacao);


--
-- TOC entry 3244 (class 2606 OID 16509)
-- Name: tipolaudo tipolaudo_pkey; Type: CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.tipolaudo
    ADD CONSTRAINT tipolaudo_pkey PRIMARY KEY (idtipolaudo);


--
-- TOC entry 3246 (class 2606 OID 16547)
-- Name: usuario usuario_pk; Type: CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.usuario
    ADD CONSTRAINT usuario_pk PRIMARY KEY (idusuario);


--
-- TOC entry 3247 (class 2606 OID 16510)
-- Name: endereco endereco_idsede_fkey; Type: FK CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.endereco
    ADD CONSTRAINT endereco_idsede_fkey FOREIGN KEY (idsede) REFERENCES laudo.sede(idsede);


--
-- TOC entry 3248 (class 2606 OID 16515)
-- Name: equipamento equipamento_idsede_fkey; Type: FK CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.equipamento
    ADD CONSTRAINT equipamento_idsede_fkey FOREIGN KEY (idsede) REFERENCES laudo.sede(idsede);


--
-- TOC entry 3249 (class 2606 OID 16520)
-- Name: equipamento equipamento_idtipoeq_fkey; Type: FK CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.equipamento
    ADD CONSTRAINT equipamento_idtipoeq_fkey FOREIGN KEY (idtipoeq) REFERENCES laudo.tipoeq(idtipoeq) NOT VALID;


--
-- TOC entry 3250 (class 2606 OID 16548)
-- Name: laudo laudo_fk; Type: FK CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.laudo
    ADD CONSTRAINT laudo_fk FOREIGN KEY (idusuario) REFERENCES laudo.usuario(idusuario);


--
-- TOC entry 3251 (class 2606 OID 16525)
-- Name: laudo laudo_idtipoinstalacao_fkey; Type: FK CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.laudo
    ADD CONSTRAINT laudo_idtipoinstalacao_fkey FOREIGN KEY (idtipoinstalacao) REFERENCES laudo.tipoinstalacao(idtipoinstalacao);


--
-- TOC entry 3252 (class 2606 OID 16530)
-- Name: laudo laudo_idtipolaudo_fkey; Type: FK CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.laudo
    ADD CONSTRAINT laudo_idtipolaudo_fkey FOREIGN KEY (idtipolaudo) REFERENCES laudo.tipolaudo(idtipolaudo);


--
-- TOC entry 3253 (class 2606 OID 16535)
-- Name: sede sede_idcliente_fkey; Type: FK CONSTRAINT; Schema: laudo; Owner: postgres
--

ALTER TABLE ONLY laudo.sede
    ADD CONSTRAINT sede_idcliente_fkey FOREIGN KEY (idcliente) REFERENCES laudo.cliente(idcliente);


-- Completed on 2025-06-05 22:56:15 -03

--
-- PostgreSQL database dump complete
--