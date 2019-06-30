package kr.hs.dgsw.shopping_back.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Cart {
    private Long id;
    private String userId;
    private Long productId;
    private int cost;
    private int amount;
    private int total;
}
