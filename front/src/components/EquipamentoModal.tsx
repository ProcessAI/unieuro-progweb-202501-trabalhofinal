import React from "react";
// Usa caminhos relativos para a pasta ui
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  novoEquipamento: any;
  setNovoEquipamento: (v: any) => void;
  criar: () => void;
  salvar: () => void;
  editIndex: number | null;
}

export default function EquipamentoModal({
  modalOpen,
  setModalOpen,
  novoEquipamento,
  setNovoEquipamento,
  criar,
  salvar,
  editIndex,
}: ModalProps) {
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogContent className="modal-content">
        <DialogHeader>
          <DialogTitle className="modal-title">
            {editIndex !== null ? "Editar Equipamento" : "Novo Equipamento"}
          </DialogTitle>
        </DialogHeader>
        <div className="modal-form">
          <Input
            placeholder="Nome"
            value={novoEquipamento.nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNovoEquipamento({ ...novoEquipamento, nome: e.target.value })
            }
          />
          <Input
            placeholder="IPv4"
            value={novoEquipamento.ipv4}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNovoEquipamento({ ...novoEquipamento, ipv4: e.target.value })
            }
          />
          <Input
            placeholder="Série"
            value={novoEquipamento.serie}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNovoEquipamento({ ...novoEquipamento, serie: e.target.value })
            }
          />
          <Input
            placeholder="IPv6"
            value={novoEquipamento.ipv6}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNovoEquipamento({ ...novoEquipamento, ipv6: e.target.value })
            }
          />
          <Input
            placeholder="Tipo"
            value={novoEquipamento.tipo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNovoEquipamento({ ...novoEquipamento, tipo: e.target.value })
            }
          />
          <Input
            placeholder="Anydesk"
            value={novoEquipamento.anydesk}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNovoEquipamento({
                ...novoEquipamento,
                anydesk: e.target.value,
              })
            }
          />
          <Input
            placeholder="Modelo"
            value={novoEquipamento.modelo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNovoEquipamento({ ...novoEquipamento, modelo: e.target.value })
            }
          />
          <Input
            placeholder="DW"
            value={novoEquipamento.dw}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNovoEquipamento({ ...novoEquipamento, dw: e.target.value })
            }
          />
          <Input
            placeholder="MAC"
            value={novoEquipamento.mac}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNovoEquipamento({ ...novoEquipamento, mac: e.target.value })
            }
          />
          <div className="checkbox-container">
            <Checkbox
              id="modal-alugado"
              checked={novoEquipamento.alugado}
              onCheckedChange={(c: boolean) =>
                setNovoEquipamento({ ...novoEquipamento, alugado: c })
              }
            />
            <label htmlFor="modal-alugado">ALUGADO</label>
          </div>
        </div>
        <div className="modal-actions">
          <Button
            className="save-btn"
            onClick={editIndex !== null ? salvar : criar}
          >
            {editIndex !== null ? "SALVAR" : "CRIAR"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

