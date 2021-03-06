import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Component, OnInit, Inject } from "@angular/core";
import { InventoryService } from "../../../../services/inventory.service";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.css"]
})
export class DeleteVehicleComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteVehicleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public inventoryService: InventoryService
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.inventoryService.deleteVehicle(this.data.vid);
  }
}
